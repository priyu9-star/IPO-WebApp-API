--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: ipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.ipos VALUES (24, 'Wipro IT', '410.00', '2026-01-08', '2026-01-10', '?350 Cr', 'Fixed Price', '2026-01-18', 'Coming');
INSERT INTO public.ipos VALUES (15, 'Tata Technologies', '500.00', '2025-04-09', '2025-04-11', '?300 Cr', 'Book Building', '2025-04-19', 'Ongoing');
INSERT INTO public.ipos VALUES (17, 'Zomato Ltdd', '150.00', '2025-06-14', '2025-06-16', '?700 Cr', 'Book Building', '2025-06-24', 'New Listed');
INSERT INTO public.ipos VALUES (20, 'Adani Wilmar', '320.50', '2025-09-09', '2025-09-11', '?400 Cr', 'Fixed Price', '2025-09-17', 'Coming');
INSERT INTO public.ipos VALUES (19, 'HDFC Securities', '250.00', '2025-08-18', '2025-08-20', '?900 Cr', 'Book Building', '2025-08-28', 'Closed');
INSERT INTO public.ipos VALUES (21, 'Nykaa Fashion', '180', '2025-10-03', '2025-10-17', '?650 Cr', 'Book Building', '2025-10-14', 'New Listed');
INSERT INTO public.ipos VALUES (22, 'Infosys IPO', '480', '2025-11-12', '2025-11-22', '?1,000 Cr', 'Fixed Price', '2025-11-09', 'Closed');
INSERT INTO public.ipos VALUES (23, 'TCS Digital', '550.00', '2025-12-11', '2025-12-13', '?2,000 Cr', 'Book Building', '2025-12-19', 'Coming');


--
-- Name: ipos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ipos_id_seq', 24, true);


--
-- PostgreSQL database dump complete
--

