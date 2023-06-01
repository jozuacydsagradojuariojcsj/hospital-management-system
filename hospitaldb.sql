-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2023 at 03:52 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospitaldb`
--

-- --------------------------------------------------------

--
-- Table structure for table `all_doctors`
--

CREATE TABLE `all_doctors` (
  `doc_prefix` varchar(2) DEFAULT NULL,
  `doctor_number` int(11) NOT NULL,
  `department_assigned` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_name` varchar(50) NOT NULL,
  `department_location` text DEFAULT NULL,
  `facilities_available` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doc_on_call`
--

CREATE TABLE `doc_on_call` (
  `doc_on_call_prefix` varchar(2) DEFAULT NULL,
  `doctor_number` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `qualification` text DEFAULT NULL,
  `fees_per_call` float(10,2) DEFAULT NULL,
  `payment_due` date DEFAULT NULL,
  `address` text DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doc_reg`
--

CREATE TABLE `doc_reg` (
  `doc_reg_prefix` varchar(2) DEFAULT NULL,
  `doctor_number` int(11) DEFAULT NULL,
  `doctor_name` varchar(50) DEFAULT NULL,
  `qualification` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `salary` float(10,2) DEFAULT NULL,
  `date_of_joining` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pat_admit`
--

CREATE TABLE `pat_admit` (
  `patient_number` int(11) DEFAULT NULL,
  `advance_payment` date DEFAULT NULL,
  `mode_of_payment` varchar(20) DEFAULT NULL,
  `room_number` int(11) DEFAULT NULL,
  `department_name` varchar(20) DEFAULT NULL,
  `date_of_admission` date DEFAULT NULL,
  `initial_condition` text DEFAULT NULL,
  `diagnosis` text DEFAULT NULL,
  `treatment` text DEFAULT NULL,
  `doctor_number` int(11) DEFAULT NULL,
  `attendant_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pat_chkup`
--

CREATE TABLE `pat_chkup` (
  `patient_number` int(11) DEFAULT NULL,
  `doctor_number` int(11) DEFAULT NULL,
  `date_of_checkup` date DEFAULT NULL,
  `diagnosis` text DEFAULT NULL,
  `treatment` text DEFAULT NULL,
  `patient_referred_to` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pat_dis`
--

CREATE TABLE `pat_dis` (
  `patient_number` int(11) DEFAULT NULL,
  `treatment_give` text DEFAULT NULL,
  `treatment_advice` text DEFAULT NULL,
  `payment_made` float(10,2) DEFAULT NULL,
  `mode_of_payment` varchar(20) DEFAULT NULL,
  `date_of_discharge` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pat_entry`
--

CREATE TABLE `pat_entry` (
  `patient_prefix` varchar(2) DEFAULT NULL,
  `patient_number` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `age` tinyint(4) DEFAULT NULL,
  `sex` char(1) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `city` varchar(90) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `entry_date` date DEFAULT NULL,
  `doctor_number` int(11) DEFAULT NULL,
  `doctor_name_referred_to` varchar(50) DEFAULT NULL,
  `diagnosis` text DEFAULT NULL,
  `department_name` varchar(50) DEFAULT NULL
) ;

-- --------------------------------------------------------

--
-- Table structure for table `pat_opr`
--

CREATE TABLE `pat_opr` (
  `patient_number` int(11) DEFAULT NULL,
  `date_of_admission` date DEFAULT NULL,
  `date_of_operation` date DEFAULT NULL,
  `doctor_number_conductedOperation` int(11) DEFAULT NULL,
  `department_name` varchar(20) DEFAULT NULL,
  `operationTheater_number` int(11) DEFAULT NULL,
  `type_of_operation` text DEFAULT NULL,
  `patient_conditionBeforeOperation` text DEFAULT NULL,
  `patient_conditionAfterOperation` text DEFAULT NULL,
  `treatment_advice` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pat_reg`
--

CREATE TABLE `pat_reg` (
  `patient_number` int(11) DEFAULT NULL,
  `date_of_visit` date DEFAULT NULL,
  `diagnosis` text DEFAULT NULL,
  `treatment` text DEFAULT NULL,
  `medicine_recommended` text DEFAULT NULL,
  `status_of_treatment` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `room_details`
--

CREATE TABLE `room_details` (
  `room_number` int(11) NOT NULL,
  `room_type` char(1) DEFAULT NULL,
  `room_occupied` char(1) DEFAULT NULL,
  `patient_number` int(11) DEFAULT NULL,
  `patient_name` varchar(50) DEFAULT NULL,
  `charges_per_day` float(10,2) DEFAULT NULL
) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `all_doctors`
--
ALTER TABLE `all_doctors`
  ADD PRIMARY KEY (`doctor_number`),
  ADD KEY `department_assigned` (`department_assigned`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_name`);

--
-- Indexes for table `doc_on_call`
--
ALTER TABLE `doc_on_call`
  ADD KEY `doctor_number` (`doctor_number`);

--
-- Indexes for table `doc_reg`
--
ALTER TABLE `doc_reg`
  ADD KEY `doctor_number` (`doctor_number`);

--
-- Indexes for table `pat_admit`
--
ALTER TABLE `pat_admit`
  ADD KEY `patient_number` (`patient_number`),
  ADD KEY `department_name` (`department_name`),
  ADD KEY `doctor_number` (`doctor_number`),
  ADD KEY `room_number` (`room_number`);

--
-- Indexes for table `pat_chkup`
--
ALTER TABLE `pat_chkup`
  ADD KEY `patient_number` (`patient_number`),
  ADD KEY `doctor_number` (`doctor_number`);

--
-- Indexes for table `pat_dis`
--
ALTER TABLE `pat_dis`
  ADD KEY `patient_number` (`patient_number`);

--
-- Indexes for table `pat_entry`
--
ALTER TABLE `pat_entry`
  ADD PRIMARY KEY (`patient_number`),
  ADD KEY `doctor_number` (`doctor_number`),
  ADD KEY `department_name` (`department_name`);

--
-- Indexes for table `pat_opr`
--
ALTER TABLE `pat_opr`
  ADD KEY `patient_number` (`patient_number`),
  ADD KEY `department_name` (`department_name`),
  ADD KEY `doctor_number_conductedOperation` (`doctor_number_conductedOperation`);

--
-- Indexes for table `pat_reg`
--
ALTER TABLE `pat_reg`
  ADD KEY `patient_number` (`patient_number`);

--
-- Indexes for table `room_details`
--
ALTER TABLE `room_details`
  ADD PRIMARY KEY (`room_number`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `all_doctors`
--
ALTER TABLE `all_doctors`
  ADD CONSTRAINT `all_doctors_ibfk_1` FOREIGN KEY (`department_assigned`) REFERENCES `department` (`department_name`);

--
-- Constraints for table `doc_on_call`
--
ALTER TABLE `doc_on_call`
  ADD CONSTRAINT `doc_on_call_ibfk_1` FOREIGN KEY (`doctor_number`) REFERENCES `all_doctors` (`doctor_number`);

--
-- Constraints for table `doc_reg`
--
ALTER TABLE `doc_reg`
  ADD CONSTRAINT `doc_reg_ibfk_1` FOREIGN KEY (`doctor_number`) REFERENCES `all_doctors` (`doctor_number`);

--
-- Constraints for table `pat_admit`
--
ALTER TABLE `pat_admit`
  ADD CONSTRAINT `pat_admit_ibfk_1` FOREIGN KEY (`patient_number`) REFERENCES `pat_entry` (`patient_number`),
  ADD CONSTRAINT `pat_admit_ibfk_2` FOREIGN KEY (`department_name`) REFERENCES `department` (`department_name`),
  ADD CONSTRAINT `pat_admit_ibfk_3` FOREIGN KEY (`doctor_number`) REFERENCES `all_doctors` (`doctor_number`),
  ADD CONSTRAINT `pat_admit_ibfk_4` FOREIGN KEY (`room_number`) REFERENCES `room_details` (`room_number`);

--
-- Constraints for table `pat_chkup`
--
ALTER TABLE `pat_chkup`
  ADD CONSTRAINT `pat_chkup_ibfk_1` FOREIGN KEY (`patient_number`) REFERENCES `pat_entry` (`patient_number`),
  ADD CONSTRAINT `pat_chkup_ibfk_2` FOREIGN KEY (`doctor_number`) REFERENCES `all_doctors` (`doctor_number`);

--
-- Constraints for table `pat_dis`
--
ALTER TABLE `pat_dis`
  ADD CONSTRAINT `pat_dis_ibfk_1` FOREIGN KEY (`patient_number`) REFERENCES `pat_entry` (`patient_number`);

--
-- Constraints for table `pat_entry`
--
ALTER TABLE `pat_entry`
  ADD CONSTRAINT `pat_entry_ibfk_1` FOREIGN KEY (`doctor_number`) REFERENCES `all_doctors` (`doctor_number`),
  ADD CONSTRAINT `pat_entry_ibfk_2` FOREIGN KEY (`department_name`) REFERENCES `department` (`department_name`);

--
-- Constraints for table `pat_opr`
--
ALTER TABLE `pat_opr`
  ADD CONSTRAINT `pat_opr_ibfk_1` FOREIGN KEY (`patient_number`) REFERENCES `pat_entry` (`patient_number`),
  ADD CONSTRAINT `pat_opr_ibfk_2` FOREIGN KEY (`department_name`) REFERENCES `department` (`department_name`),
  ADD CONSTRAINT `pat_opr_ibfk_3` FOREIGN KEY (`doctor_number_conductedOperation`) REFERENCES `all_doctors` (`doctor_number`);

--
-- Constraints for table `pat_reg`
--
ALTER TABLE `pat_reg`
  ADD CONSTRAINT `pat_reg_ibfk_1` FOREIGN KEY (`patient_number`) REFERENCES `pat_entry` (`patient_number`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
