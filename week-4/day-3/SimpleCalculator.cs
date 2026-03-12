using System;


namespace HandsonW4
{
    internal class SimpleCalculator
    {
        static void Main()
        {
            Console.Write("Enter  number1 : ");
            int num1 = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter  number2 : ");
            int num2 = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter  operator to perform action : ");
            char ch = Convert.ToChar(Console.ReadLine());

            switch (ch)
            {
                case '+':
                    Console.WriteLine(num1 + num2);
                    break;
                case '-':
                    Console.WriteLine(num1 - num2);
                    break;
                case '*':
                    Console.WriteLine(num1 * num2);
                    break;
                case '/':
                    if (num2 == 0)
                    {
                        Console.WriteLine("num2 cannot be zero please enter greater 0");
                    }
                    else
                    {
                        Console.WriteLine(num1 / num2);

                    }
                    break;
                default: Console.WriteLine("Enter operator only +,-,*,/"); break;
            }
        }
    }
}
