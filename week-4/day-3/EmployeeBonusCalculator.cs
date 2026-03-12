using System;


namespace ConsoleApp1
{
    internal class EmployeeBonusCalculator
    {
        static void Main()
        {
            Console.Write("Enter Employee Name : ");
            string name = Console.ReadLine();
            Console.Write("Enter Employee Salary : ");
            double salary = Convert.ToDouble(Console.ReadLine());
            Console.Write("Enter Experience in Years : ");
            byte year = Convert.ToByte(Console.ReadLine());

            double bonus = 0;

            if (year < 2)
            {
                bonus = (salary / 100) * 5;
            }
            else if (year > 2 && year < 5)
            {
                bonus = (salary / 100) * 10;
            }
            else
            {
                bonus = (salary / 100) * 15;
            }

            Console.WriteLine($"Employee Name : {name}\nBonus : {bonus}\nFinalSalary: {bonus + salary}");


        }

    }
}
