import GamesApi from '@/api/game.api'

class GameService {
    async getGames() {
        try {
            const response = await GamesApi.getGames()
            if(response && response.data){
                return response.data
            }
        } catch(error){
            throw error
        }
    }
}

export default new GameService()