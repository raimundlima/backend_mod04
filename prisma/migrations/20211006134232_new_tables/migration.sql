/*
  Warnings:

  - You are about to drop the `listofgames` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `listofgames` DROP FOREIGN KEY `ListOfGames_gameId_fkey`;

-- DropForeignKey
ALTER TABLE `listofgames` DROP FOREIGN KEY `ListOfGames_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `admin` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `cpf` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `listofgames`;

-- CreateTable
CREATE TABLE `Games_on_Perfil` (
    `idPerfil` INTEGER NOT NULL,
    `idGame` INTEGER NOT NULL,

    PRIMARY KEY (`idPerfil`, `idGame`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Games_on_Perfil` ADD CONSTRAINT `Games_on_Perfil_idPerfil_fkey` FOREIGN KEY (`idPerfil`) REFERENCES `Perfil`(`idPerfil`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Games_on_Perfil` ADD CONSTRAINT `Games_on_Perfil_idGame_fkey` FOREIGN KEY (`idGame`) REFERENCES `Games`(`idGame`) ON DELETE CASCADE ON UPDATE CASCADE;
