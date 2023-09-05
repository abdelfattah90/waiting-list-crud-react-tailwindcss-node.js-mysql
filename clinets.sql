-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2023 at 03:59 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `waiting-list-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `clinets`
--

CREATE TABLE `clinets` (
  `id` int(11) NOT NULL,
  `clinetname` varchar(255) DEFAULT NULL,
  `clinetid` varchar(255) DEFAULT NULL,
  `priority` varchar(45) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clinets`
--

INSERT INTO `clinets` (`id`, `clinetname`, `clinetid`, `priority`, `created_at`) VALUES
(1, 'Ahmed', 'R5174', 'Normal', '2023-07-09 11:42:32'),
(2, 'Ali', 'H1740', 'Quick', '2023-07-09 11:42:40'),
(3, 'Amr', 'J4711', 'Normal', '2023-09-05 13:20:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clinets`
--
ALTER TABLE `clinets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clinets`
--
ALTER TABLE `clinets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
