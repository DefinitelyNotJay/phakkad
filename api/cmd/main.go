package main

import (
	"fmt"
	"log"
	"strconv"

	"github.com/tendou26/esanlover/configs"
	"github.com/tendou26/esanlover/types"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=%s&loc=%s", configs.Envs.User, configs.Envs.Password, configs.Envs.Host, configs.Envs.Port, configs.Envs.DBName, configs.Envs.Charset, strconv.FormatBool(configs.Envs.ParseTime), configs.Envs.Loc)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	fmt.Println("Database connect successfully.", db)

	db.AutoMigrate(&types.User{})

	err = db.AutoMigrate(&types.User{}, &types.Post{}, &types.PostTag{}, &types.Comment{}, &types.Reaction{}, &types.Retweet{})
	if err != nil {
		log.Fatal("failed to automigrate:", err)
	}
	log.Println("Database migrated successfully!")

}
