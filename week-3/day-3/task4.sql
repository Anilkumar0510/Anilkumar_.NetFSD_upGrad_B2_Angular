
use EcommerceWebApp
--1. Display product_name, store_name, available stock quantity, and total quantity sold. 
select product_name, store_name, quantity from products p
inner join stocks sk on sk.product_id=p.product_id
inner join stores sr on sr.store_id=sk.store_id

--2. Include products even if they have not been sold (use appropriate join). 
select product_name, store_name,quantity from products p
inner join stocks sk on sk.product_id=p.product_id
inner join stores sr on sr.store_id=sk.store_id
inner join orders o on o.store_id=sr.store_id
where order_status=3;




--3. Group results by product_name and store_name. 
select product_name, store_name from products p
inner join stocks sk on sk.product_id=p.product_id
inner join stores sr on sr.store_id=sk.store_id
inner join orders o on o.store_id=sr.store_id
group by product_name,store_name;

--4. Sort results by product_name. 
select product_name, store_name from products p
inner join stocks sk on sk.product_id=p.product_id
inner join stores sr on sr.store_id=sk.store_id
inner join orders o on o.store_id=sr.store_id
--group by product_name,store_name
order by product_name asc;