
use EcommerceWebApp
--1. Display store_name and total sales amount.
--2. Calculate total sales using 
select store_name, sum(i.list_price) As 'Total sales amount' from stores S
inner join orders O on s.store_id=o.store_id 
inner join order_items I on o.order_id=i.order_id group by s.store_name. 

--3. Include only completed orders (order_status = 4). 
select store_name, sum(i.list_price) As 'Total sales amount' from stores S 
inner join orders O on s.store_id=o.store_id 
inner join order_items I on o.order_id=i.order_id 
where o.order_status=4 
group by s.store_name 




--4. Group results by store_name. SELECT 
   select store_name, sum(i.list_price) As 'Total sales amount' from stores S
inner join orders O on s.store_id=o.store_id 
inner join order_items I on o.order_id=i.order_id group by s.store_name

--5. Sort total sales in descending order. 
select store_name, sum(i.list_price) As 'Total sales amount' from stores S
inner join orders O on s.store_id=o.store_id 
inner join order_items I on o.order_id=i.order_id group by s.store_name order by sum(i.list_price) desc