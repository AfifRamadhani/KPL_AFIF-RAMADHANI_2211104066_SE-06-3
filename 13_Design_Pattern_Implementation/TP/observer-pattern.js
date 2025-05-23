// Interface untuk Subject (Publisher)
class Subject {
    constructor() {
        this.observers = [];
    }

    // Method untuk menambahkan observer
    attach(observer) {
        console.log('Subject: Observer telah ditambahkan.');
        this.observers.push(observer);
    }

    // Method untuk menghapus observer
    detach(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
            console.log('Subject: Observer telah dihapus.');
        }
    }

    // Method untuk memberitahu semua observer
    notify() {
        console.log('Subject: Memberitahu observers...');
        for (let observer of this.observers) {
            observer.update(this);
        }
    }
}

// Concrete Subject - Kelas yang akan diobservasi
class ConcreteSubject extends Subject {
    constructor() {
        super();
        this.state = 0;
    }

    // Getter untuk state
    getState() {
        return this.state;
    }

    // Setter untuk state
    setState(state) {
        this.state = state;
        console.log(`Subject: State saya telah berubah menjadi: ${this.state}`);
        this.notify();
    }

    // Method untuk melakukan business logic
    someBusinessLogic() {
        console.log('\nSubject: Saya sedang melakukan sesuatu yang penting.');
        const randomState = Math.floor(Math.random() * 10);
        this.setState(randomState);
    }
}

// Interface untuk Observer
class Observer {
    update(subject) {
        // Method ini akan di-override oleh concrete observer
        throw new Error('Method update() harus diimplementasikan');
    }
}

// Concrete Observer A
class ConcreteObserverA extends Observer {
    update(subject) {
        if (subject.getState() < 3) {
            console.log('ConcreteObserverA: Bereaksi terhadap event.');
        }
    }
}

// Concrete Observer B
class ConcreteObserverB extends Observer {
    update(subject) {
        if (subject.getState() === 0 || subject.getState() >= 2) {
            console.log('ConcreteObserverB: Bereaksi terhadap event.');
        }
    }
}

// Concrete Observer C - Observer tambahan untuk demonstrasi
class ConcreteObserverC extends Observer {
    update(subject) {
        if (subject.getState() >= 5) {
            console.log('ConcreteObserverC: State tinggi terdeteksi, melakukan tindakan khusus.');
        }
    }
}

// Fungsi main untuk menjalankan program
function main() {
    console.log('=== DEMO OBSERVER PATTERN ===\n');

    // Membuat subject (publisher)
    const subject = new ConcreteSubject();

    // Membuat observers (subscribers)
    const observerA = new ConcreteObserverA();
    const observerB = new ConcreteObserverB();
    const observerC = new ConcreteObserverC();

    // Menambahkan observers ke subject
    subject.attach(observerA);
    subject.attach(observerB);
    subject.attach(observerC);

    // Menjalankan business logic yang akan mengubah state
    subject.someBusinessLogic();
    subject.someBusinessLogic();
    subject.someBusinessLogic();

    // Menghapus observer A
    console.log('\n--- Menghapus Observer A ---');
    subject.detach(observerA);

    // Menjalankan business logic lagi
    subject.someBusinessLogic();
    subject.someBusinessLogic();

    console.log('\n=== DEMO SELESAI ===');
}

// Menjalankan program
main();

// Export untuk penggunaan sebagai module (opsional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Subject,
        ConcreteSubject,
        Observer,
        ConcreteObserverA,
        ConcreteObserverB,
        ConcreteObserverC
    };
}