#include <Python.h>
#include <stdio.h>

void print_python_list(PyObject *p);
void print_python_bytes(PyObject *p);
void print_python_float(PyObject *p);

/**
 * print_python_list - Prints basic info about Python lists.
 * @p: A PyObject list.
 */
void print_python_list(PyObject *p)
{
    Py_ssize_t size, i;
    PyObject *item;

    if (!PyList_Check(p))
    {
        printf("[ERROR] Invalid List Object\n");
        return;
    }

    size = PyList_Size(p);
    printf("[*] Python list info\n[*] Size of the Python List = %zd\n", size);
    printf("[*] Allocated = %zd\n", ((PyListObject *)p)->allocated);

    for (i = 0; i < size; i++)
    {
        item = PyList_GetItem(p, i);
        printf("Element %zd: %s\n", i, Py_TYPE(item)->tp_name);
        if (PyBytes_Check(item))
            print_python_bytes(item);
        else if (PyFloat_Check(item))
            print_python_float(item);
    }
}

/**
 * print_python_bytes - Prints basic info about Python bytes.
 * @p: A PyObject byte object.
 */
void print_python_bytes(PyObject *p)
{
    Py_ssize_t size, i;
    char *string;

    if (!PyBytes_Check(p))
    {
        printf("[ERROR] Invalid Bytes Object\n");
        return;
    }

    size = PyBytes_Size(p);
    string = PyBytes_AsString(p);
    printf("[.] bytes object info\n  size: %zd\n  trying string: %s\n", size, string);
    printf("  first %zd bytes:", size < 10 ? size + 1 : 10);
    for (i = 0; i < size && i < 10; i++)
        printf(" %02x", (unsigned char)string[i]);
    printf("\n");
}

/**
 * print_python_float - Prints basic info about Python float.
 * @p: A PyObject float object.
 */
void print_python_float(PyObject *p)
{
    if (!PyFloat_Check(p))
    {
        printf("[ERROR] Invalid Float Object\n");
        return;
    }

    printf("[.] float object info\n  value: %f\n", PyFloat_AsDouble(p));
}

