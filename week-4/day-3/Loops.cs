using System;


namespace ConsoleApp1
{
    internal class Loops
    {
        static void Main()
        {
            Console.Write("Enter number : ");
            int num = Convert.ToInt16(Console.ReadLine());
            int evencount = 0, oddcount = 0, sum = 0;
            for (int i = 1; i <= num; i++)
            {
                if (i % 2 == 0)
                {
                    evencount++;
                }
                else
                {
                    oddcount++;
                }
                sum += i;
            }
            Console.WriteLine($"OddCount : {oddcount}\nEvenCount : {evencount}\nSum : {sum}");
        }
    }
}
