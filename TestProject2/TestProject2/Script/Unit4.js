function test() { //проверка операции деления
TestedApps.RunAll();
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button7").ClickButton(); //кнопка 6
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button15").ClickButton(); //кнопка /
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button11").ClickButton(); //кнопка 3
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button14").ClickButton(); //кнопка =
var msg = Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("textBox1").Text;
Log.Message(msg);
if (msg == '=2') {
  Log.Message('Ура, работает!')
} else{
  Log.Message('Не работает!')
}
}