package database

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
)

func Connect() {
	_, err := gorm.Open(mysql.Open("root:12345678@/showroomDB"), &gorm.Config{})
	if err != nil {
		log.Panicln("can't open database connection")
	}
}
