
--1. Display product_name, brand_name, category_name, model_year, and list_price. 
select 
p.product_name,
b.brand_name,
c.category_name,
p.model_year,
p.list_price
from products p
inner join  brands b
ON p.brand_id = b.brand_id
INNER JOIN categories c
ON p.category_id = c.category_id

--2.Filter products with list_price greater than 500
select * from products where list_price>500;

--3.Sort results by list_price in ascending order

select * from products where list_price>500 order by list_price asc;