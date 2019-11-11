<template>
    <div class="game">
        Id do jogo escolhido: {{ gameId }}
        <v-card max-width="900px">
            <v-img
            :src="gameDetail.imageUrl"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="500px"
            >
            <v-card-title v-text="gameDetail.name"></v-card-title>
            </v-img>

            <v-card-text>
                <p>Categoria: {{ gameDetail.category }}</p>
                <p>Data lançamento: {{ gameDetail.releaseDate }}</p>
                <p>Classificação: {{ gameDetail.rating }}</p>
            </v-card-text>

        </v-card>
    </div>
</template>

<script>

export default {

    data() {
        return {
            gameId: this.$route.params.gameId,
            gameDetail: {
                'id': 1,
                'name': 'CS:GO',
                'releaseDate':'10/01/2010',
                'rating':'L',
                'category':'ACTION',
                'imageUrl':'https://www.techadvisor.co.uk/cmsdata/features/3645914/counter_strike_global_offensive_thumb800.jpg',
                'characterList': [
                    { 'name':'CT', 'imageUrl': 'https://www.pngkey.com/png/detail/227-2279373_counter-terrorist-from-the-game-cs-counter-strike.png' },
                    { 'name':'Terror', 'imageUrl': 'https://vrcmods.com/imgs/4GtwsHNSLhVU.jpg'}
                ]
            }
        }
    }

}

</script>