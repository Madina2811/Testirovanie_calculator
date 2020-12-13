function test() { //проверка операции сложения 
TestedApps.RunAll();
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button1").ClickButton(); //кнопка 7
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button4").ClickButton(); //кнопка +
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button2").ClickButton(); //кнопка 8
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button14").ClickButton(); //кнопка =
var msg = Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("textBox1").Text;
Log.Message(msg);
if (msg == '=15') {
  Log.Message('Ура, работает!')
} else{
  Log.Message('Не работает!')
}
}