// // Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 

const bankAccount = {
    ownerName: "Lev",
    accountNumber: 43-523-545-421-53,
    balance: 2000,
    deposit() {
        const requestKnowledge = confirm(`${this.ownerName}, чи бажаєте поповнити баланс`);
        const fundsAdmin = Number(prompt("Введіть суму на яку бажаєте поповнти"));
        if (Number(fundsAdmin) && fundsAdmin > 0) {
            this.balance += fundsAdmin
            alert(`${this.ownerName}, на вашому рахунку ${this.balance}`)
        } else {
            alert(`${this.ownerName} ви ввели не вірні данні`)
        }
    },
    withdraw() {
        const requestKnowledg = confirm(`${this.ownerName}, чи бажаєте отримати готівку`)
        const fundAdmin = Number(prompt("Введіть суму, яку бажаєте отримати"));
          if (Number(fundAdmin) && fundAdmin > 0) {
            this.balance -= fundAdmin
            alert(`${this.ownerName} на вашому рахунку ${this.balance}$`)
        } else {
            alert(`${this.ownerName} ви ввели не вірні данні`)
        }
    }
}
bankAccount.deposit();
bankAccount.withdraw();

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки 

const weather = {
    temperature: Number(prompt("Введіть температуру")),
    humidity: 50,
    windSpeed: 5,
    true() {
        if (Number(this.temperature) && this.temperature < 0) {
            alert("температура нижче 0 градусів Цельсія");
            console.log(true);
        } else if (isNaN(this.temperature)) {
            alert("Напишишіть число а не букву");
        }

    },
    false() {
        if (Number(this.temperature) && this.temperature > 0) {
            alert("температура more 0 градусів Цельсія");
            console.log(false);
        } else if (isNaN(this.temperature)){
            alert("Напишишіть число а не букву");
        }
    }
}

weather.true();
weather.false();

// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 

const user = {
    name: "Lev",
    email: "trgf",
    password: "qwerty",
    login(password = this.password, email = this.email) {
        const requestKnowledge = confirm(`${this.name}, чи бажаєте ви зайти в акаунт?`);
        const fundsAdmin = (prompt("Введіть пароль"));
        if (fundsAdmin === password) {
            alert(`Ви правильно написали пароль ${this.name}!!! Тепер напишіть email`);
        } else if (fundsAdmin !== password) {
            alert(`Ви не правильно вели пароль ${this.name}. Але якщо ви ведете правильно email то ми відправимо пароль по почті`);
        }
        const securityEmail = (prompt("Введіть email"));
        if (securityEmail === email) {
            alert(`Ви правильно написали email ${this.name}!!! Тепер ви можете зайти в акаунт`);
        }
        else if (securityEmail !== email) {
            alert(`${this.name} Ви вели не вырні дані`)
        }
    }
}

user.login();

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 

const movie = {
    title: "Breaking Bad",
    director: "Vince Gilligan",
    year: 2008,
    rating: 9.5,
    ratingFilm(rating) {
        if (parseFloat(this.rating) > rating) {
            console.log(`Рейтинг фільму ${this.title} вище ${rating} рейтинг фільму ${this.rating}`);
            console.log(true);
        } 
        else {
            console.log(`Рейтинг фільму ${this.title} низче ${rating} рейтинг фільму ${this.rating}`);
            console.log(false);
        }
    }
}

movie.ratingFilm(8);