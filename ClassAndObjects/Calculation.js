// CREATING CAR CLASS
class Car {
    constructor(name, maxSpeed, power, consumption) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.power = power;
        this.consumption = consumption;
    }

    CalculateAverageTime(distance) {
        // Implement this method to calculate the car's average time to cover the provided distance
        return distance / this.maxSpeed;
    }
}

// CREATING RACE CLASS
class Race {
    constructor(name, type, distance) {
        this.Name = name;
        this.Type = type;
        this.Distance = distance;
        this.Winner = "";
        this.Participants = [];
    }

    DefineWinner() {
        let shortestTime = this.Participants[0].CalculateAverageTime(this.Distance);
        let winner = this.Participants[0];

        for (let index = 1; index < this.Participants.length; index++) {
            let time = this.Participants[index].CalculateAverageTime(this.Distance);
            if (time < shortestTime) {
                shortestTime = time;
                winner = this.Participants[index];
            }
        }
        return this.Winner = winner;
    }

    DisplayWinner() {
        alert("The winner is: " + this.Winner.name);
    }
}

let race = new Race("Monza", "Formula 1", 60000);

race.Participants[0] = new Car("Kicks", 120, 160, 5);
race.Participants[1] = new Car("Marea", 210, 200, 9);
race.Participants[2] = new Car("Peugeot", 300, 220, 10);

race.DefineWinner();
race.DisplayWinner();
