﻿function test() { //проверка операции вычитания
TestedApps.RunAll();
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button3").ClickButton(); //кнопка 9
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button8").ClickButton(); //кнопка -
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button5").ClickButton(); //кнопка 4
Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("button14").ClickButton(); //кнопка =
var msg = Sys.Process("Калькулятор v7.5").WinFormsObject("Form1").WinFormsObject("textBox1").Text;
Log.Message(msg);
if (msg == '=5') {
  Log.Message('Ура, работает!')
} else{
  Log.Message('Не работает!')
}
}