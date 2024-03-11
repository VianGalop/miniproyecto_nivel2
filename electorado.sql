-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3308
-- Tiempo de generación: 11-03-2024 a las 04:49:20
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `electorado`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `dni` varchar(50) NOT NULL,
  `edad` varchar(50) NOT NULL,
  `fecha_creacion` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `genero` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `direccion`, `correo_electronico`, `dni`, `edad`, `fecha_creacion`, `telefono`, `genero`) VALUES
(1, 'Bella', 'Navarro Lopez', 'Thompson Justo 4868', 'bkondratenko0@plala.or.jp', '4678424385', '33', '2023-11-06', '853-993-6890', 'Femenino'),
(2, 'Tyn', 'McGooch McKinnell', 'Parque Forster 00853', 'emckinnell1@miibeian.gov.cn', '0773437681', '22', '2023-05-18', '713-018-8379', 'Femenino'),
(3, 'Marie ', 'Seamark Widdall', 'Calle Darwin 016', 'bwiddall2@independent.co.uk', '2675023701', '60', '2023-12-24', '825-627-8750', 'Femenino'),
(4, 'Budd', 'Duckhouse Sheils', 'Lyons Trail 61', 'bosheils3@mysql.com', '9672884990', '41', '2023-03-10', '121-770-3690', 'Masculino'),
(5, 'Carmela', 'Deamer Mortel', 'Hidalgo 469', 'cmortel4@home.pl', '0904050831', '80', '2023-07-30', '832-621-8719', 'Femenino'),
(6, 'Laurice', 'Jacks Bockh', 'Calle Dayton 95910', 'hbockh5@hostgator.com', '3255572290', '66', '2023-10-06', '371-806-3586', 'Femenino'),
(7, 'Bernardina', 'Guidera Longforth', 'Plaza Norte 86800', 'hlongforth6@eepurl.com', '3964190896', '76', '2023-03-26', '536-591-4966', 'Femenino'),
(8, 'Quinn', 'Salvin Scurfield', 'Calle Trail 40397', 'kscurfield7@answers.com', '4963884690', '20', '2023-06-19', '492-038-6083', 'Masculino'),
(9, 'Johnny', 'Ida Leachman', 'Boulervard Pass 515', 'wleachman8@noaa.gov', '2587584973', '61', '2023-07-18', '982-481-4596', 'Masculino'),
(10, 'Kali', 'Hathaway Coffee', 'Calle Doe 623', 'rcoffee9@wufoo.com', '7455112505', '75', '2023-12-23', '800-667-1785', 'Femenino');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo_electronico` (`correo_electronico`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
