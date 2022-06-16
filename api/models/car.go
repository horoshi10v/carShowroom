package models

import (
	"database/sql/driver"
	"gorm.io/gorm"
)

type carType string

const (
	SEDAN     carType = "SEDAN"
	HATCHBACK carType = "HATCHBACK"
	MINIVAN   carType = "MINIVAN"
)

func (ct *carType) Scan(value interface{}) error {
	*ct = carType(value.([]byte))
	return nil
}

func (ct carType) Value() (driver.Value, error) {
	return string(ct), nil
}

type Car struct {
	gorm.Model
	Id    uint   `json:"id" gorm:"primaryKey"`
	Brand string `json:"brand"`
	Name  string `json:"name"`
	//Type         string `json:"type" gorm:"type:enum('published', 'pending', 'deleted');default:'pending'"`
	Type         carType `sql:"type"`
	Transmission string  `json:"transmission"`
	Color        string  `json:"color"`
	Images       string  `json:"image"`
	Description  string  `json:"description"`
	Engine       Engine  `json:"engine" gorm:"foreignKey:Id"`
	VisitorList  VisitorList
}

type Engine struct {
	Id              uint   `json:"id" gorm:"primaryKey"`
	Type            string `json:"type"`
	Size            uint   `json:"size"`
	Power           uint   `json:"power"`
	FuelConsumption uint   `json:"fuel"`
}

func (Car) TableName() string {
	return "Cars"
}
