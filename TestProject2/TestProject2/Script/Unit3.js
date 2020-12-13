function test() { //проверка операции умножения
TestedApps.RunAll();
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button6").ClickButton(); //кнопка 5
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button13").ClickButton(); //кнопка *
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button7").ClickButton(); //кнопка 6
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button14").ClickButton(); //кнопка =
var msg = Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("textBox1").Text;
Log.Message(msg);
if (msg == '=30') {
  Log.Message('Ура, работает!')
} else{
  Log.Message('Не работает!')
}
}