import Phaser from "phaser";
class CoinTossScene extends Phaser.Scene {
    constructor() {
      super({ key: 'CoinTossScene' });
    }
  
    create() {
      // Create the "Heads" button
      
      
      const { mode, playerTurn } = this.scene.settings.data;
      if(playerTurn==="player1"){
        this.createButtons()
      }
      else{
        this.add.text(this.cameras.main)
      }
      console.log(mode,playerTurn);
      
    }
    createButton(){
      let headsButton = this.add.text(100, 200, 'Heads', { fontSize: '32px', backgroundColor: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.selectOption('Heads'));
  
      // Create the "Tails" button
      let tailsButton = this.add.text(300, 200, 'Tails', { fontSize: '32px', backgroundColor: '#f00' })
        .setInteractive()
        .on('pointerdown', () => this.selectOption('Tails'));
  
      // This function is called when either button is clicked
      this.selectOption = (option) => {
        console.log(`${option} selected!`);
       const tossResult=this.tossCoin(option)
        // Add any additional logic here for what happens when an option is selected
      };
    }
    tossCoin(option){
      const coin =["Head",'Tails']
      const flipResuilt=Phaser.Math.Between(0,1)
      
      if(option===coin[flipResuilt]){
        
      }
    }
  }
  
export default CoinTossScene;
  