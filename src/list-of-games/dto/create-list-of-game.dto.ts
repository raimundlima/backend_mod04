import { IsNotEmpty,IsInt } from "class-validator";
import { ListOfGames } from "../entities/list-of-game.entity";

export class CreateListOfGameDto extends ListOfGames {
    @IsNotEmpty()
    @IsInt()
    userId:      number | null;
    @IsNotEmpty()
    @IsInt()
    gameId:      number | null;

}
