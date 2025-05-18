package configs

import (
	"fmt"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type Config struct {
	User      string
	Password  string
	Host      string
	Port      string
	DBName    string
	Charset   string
	ParseTime bool
	Loc       string
}

var Envs = initConfig()

func initConfig() Config {
	err := godotenv.Load("../.env")

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(getEnv("DB_HOST", "localhost"))

	return Config{
		User:      getEnv("DB_USER", "user"),
		Password:  getEnv("DB_PASSWORD", "1234"),
		Host:      getEnv("DB_HOST", "localhost"),
		Port:      getEnv("DB_PORT", "3306"),
		DBName:    getEnv("DB_NAME", "something"),
		Charset:   getEnv("DB_CHARSET", ""),
		ParseTime: getBoolEnv("DB_PARSE_TIME", ""),
		Loc:       getEnv("DB_LOC", ""),
	}
}

func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}

func getBoolEnv(key, fallback string) bool {
	if value, ok := os.LookupEnv(key); ok {
		parsed, err := strconv.ParseBool(value)
		if err != nil {
			fmt.Printf("Warning: could not parse %s as bool: %v\n", key, err)
			return false
		}
		return parsed
	}
	parsed, err := strconv.ParseBool(fallback)
	if err != nil {
		return false
	}
	return parsed
}
