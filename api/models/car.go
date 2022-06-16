package models

import "gorm.io/gorm"

type Car struct {
	gorm.Model
	Id           uint   `json:"id" gorm:"primaryKey"`
	Brand        string `json:"brand"`
	Name         string `json:"name"`
	Type         string `json:"type"`
	Transmission string `json:"transmission"`
	Color        string `json:"color"`
	Images       string `json:"image"`
	Description  string `json:"description"`
	Engine       Engine `json:"engine" gorm:"embedded;embeddedPrefix:engine_"`
	VisitorList  VisitorList
}

type Engine struct {
	Type            string `json:"engine_type"`
	Size            uint   `json:"engine_size"`
	Power           uint   `json:"engine_power"`
	FuelConsumption uint   `json:"engine_fuel"`
}
