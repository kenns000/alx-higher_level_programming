#!/usr/bin/python3
import MySQLdb
import sys

if __name__ == "__main__":
    db = MySQL.connect(host = "localhost", user = sys.argv[1], passwd = sys.argv[2],db = sys.argv[3], port = 3306)

    cursor db.cursor()
    cursur.execute("SELECT * FROM states ORDER BY id")
    states = cursor.fetchall()
    for row in rows:
        print(row)
    cursor.close()
    db.close()
