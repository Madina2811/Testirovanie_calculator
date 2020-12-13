function test() { //проверка операции извлечения квадратного корня
TestedApps.RunAll();
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button10").ClickButton(); //кнопка 2
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button6").ClickButton(); //кнопка 5
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button19").ClickButton(); //кнопка √ 
var msg = Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("textBox1").Text;
Log.Message(msg);
if (msg == '=5') {
  Log.Message('Ура, работает!')
} else{
  Log.Message('Не работает!')
}
}