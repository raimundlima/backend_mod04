/*
  Warnings:

  - The primary key for the `perfil` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idProfile` on the `perfil` table. All the data in the column will be lost.
  - You are about to drop the `_gamestoperfil` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_gamestoperfil` DROP FOREIGN KEY `_gamestoperfil_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_gamestoperfil` DROP FOREIGN KEY `_gamestoperfil_ibfk_2`;

-- AlterTable
ALTER TABLE `perfil` DROP PRIMARY KEY,
    DROP COLUMN `idProfile`,
    ADD COLUMN `idPerfil` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `image` VARCHAR(191),
    ADD PRIMARY KEY (`idPerfil`);

-- DropTable
DROP TABLE `_gamestoperfil`;

-- CreateTable
CREATE TABLE `ListOfGames` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `gameId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ListOfGames` ADD CONSTRAINT `ListOfGames_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`idUser`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListOfGames` ADD CONSTRAINT `ListOfGames_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Games`(`idGame`) ON DELETE CASCADE ON UPDATE CASCADE;
