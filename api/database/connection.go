package database

import (
	"api/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
)

var DB *gorm.DB

func Connect() {
	conn, err := gorm.Open(mysql.Open("root:12345678@/showroomDB"), &gorm.Config{})
	if err != nil {
		log.Panicln("can't open database connection")
	}

	DB = conn

	conn.AutoMigrate(&models.User{}, &models.Car{}, &models.Engine{}, &models.VisitorList{})

}
