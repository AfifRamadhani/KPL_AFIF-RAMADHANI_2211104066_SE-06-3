class PosisiKarakterGame {
    constructor() {
        // Define possible states
        this.states = ["Berdiri", "Jongkok", "Terbang", "Tengkurap"];
        
        // Set initial state to "Berdiri"
        this.currentState = "Berdiri";
        
        // Get the NIM for custom implementation
        this.nim = 2211104066;
        this.nimMod3 = this.nim % 3; // Calculate NIM % 3
    }
    
    // Method to handle button presses
    tekanTombol(tombol) {
        let previousState = this.currentState;
        
        // State transitions based on the button pressed
        switch (tombol) {
            case "TombolW":
                if (this.nimMod3 === 0) {
                    console.log("tombol arah atas ditekan");
                }
                
                if (this.currentState === "Berdiri") {
                    this.currentState = "Terbang";
                    if (this.nimMod3 === 2) {
                        console.log("posisi take off");
                    }
                } else if (this.currentState === "Jongkok") {
                    this.currentState = "Berdiri";
                } else if (this.currentState === "Tengkurap") {
                    this.currentState = "Jongkok";
                }
                break;
                
            case "TombolS":
                if (this.nimMod3 === 0) {
                    console.log("tombol arah bawah ditekan");
                }
                
                if (this.currentState === "Berdiri") {
                    this.currentState = "Jongkok";
                } else if (this.currentState === "Jongkok") {
                    this.currentState = "Tengkurap";
                } else if (this.currentState === "Terbang") {
                    this.currentState = "Jongkok";
                    if (this.nimMod3 === 2) {
                        console.log("posisi landing");
                    }
                }
                break;
                
            default:
                console.log("Tombol tidak dikenali");
        }
        
        // Additional output based on NIM % 3 == 1
        if (this.nimMod3 === 1) {
            if (this.currentState === "Berdiri" && previousState !== "Berdiri") {
                console.log("posisi standby");
            } else if (this.currentState === "Tengkurap" && previousState !== "Tengkurap") {
                console.log("posisi istirahat");
            }
        }
        
        // Output the current state
        console.log(`State sekarang: ${this.currentState}`);
    }
    
    // Method to get the current state
    getState() {
        return this.currentState;
    }
}

// Test the PosisiKarakterGame class directly
console.log("\n===== TEST POSISI KARAKTER GAME =====");
console.log("NIM: 2211104066");
console.log("NIM % 3 =", 2211104066 % 3);

const posisiGame = new PosisiKarakterGame();

console.log("\nState awal:", posisiGame.getState());

console.log("\n--- Simulasi perubahan state ---");
console.log("\n1. Berdiri -> Terbang (tekan TombolW)");
posisiGame.tekanTombol("TombolW");

console.log("\n2. Terbang -> Jongkok (tekan TombolS)");
posisiGame.tekanTombol("TombolS");

console.log("\n3. Jongkok -> Tengkurap (tekan TombolS)");
posisiGame.tekanTombol("TombolS");

console.log("\n4. Tengkurap -> Jongkok (tekan TombolW)");
posisiGame.tekanTombol("TombolW");

console.log("\n5. Jongkok -> Berdiri (tekan TombolW)");
posisiGame.tekanTombol("TombolW");

console.log("\n6. Berdiri -> Jongkok (tekan TombolS)");
posisiGame.tekanTombol("TombolS");

// If you want to use this in Node.js, uncomment the following:
// module.exports = PosisiKarakterGame;w