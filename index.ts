export default function getRandomNumber(): void {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    console.log(randomNumber);
  }
  
  // Execute function
  getRandomNumber();
  
  