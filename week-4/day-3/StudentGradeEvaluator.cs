using System;


namespace ConsoleApp1.week_4_Handson
{
    internal class StudentGradeEvaluator
    {
        static void Main()
        {

            Console.Write("Enter Name : ");

            string name = Console.ReadLine();

            Console.Write("Enter Marks : ");
            byte marks = Convert.ToByte(Console.ReadLine());

            if (marks < 0 || marks > 100)
            {
                Console.WriteLine("Invalid Input Enter marks only between 0 and 100");
            }
            else
            {
                if (marks > 92)
                {
                    Console.WriteLine("Grade A");
                }
                else if (marks > 75)
                {
                    Console.WriteLine("Grade B");
                }
                else if (marks > 65)
                {
                    Console.WriteLine("Grade C");
                }
                else if (marks > 55)
                {
                    Console.WriteLine("Grade D");
                }
                else if (marks > 45)
                {
                    Console.WriteLine("Grade E");
                }
                else
                {
                    Console.WriteLine("Fail");
                }
            }
        }
    }
}
