const client = require('./client');
const util = require('util');

const REPLACE_ME = 'HELP REPLACE ME!!!!';

// GET - /api/video-games - get all video games
async function getAllVideoGames() {
    try {
        const { rows: videoGames } = await client.query(REPLACE_ME);
        return videoGames;
    } catch (error) {
        throw new Error("Make sure you have replaced the REPLACE_ME placeholder.")
    }
}

// GET - /api/video-games/:id - get a single video game by id
async function getVideoGameById(id) {
    try {
        const { rows: [videoGame] } = await client.query(`
            SELECT * FROM videoGames
            WHERE id = $1;
        `, [id]);
        return videoGame;
    } catch (error) {
        throw error;
    }
}

// POST - /api/video-games - create a new video game
async function createVideoGame(id, name, description, price) {
    try {
        const {rows: [videoGame]} = await client.query(`
        INSERT INTO video-games(id, name, description, price) VALUES($1, $2, $3, $4)
        ON CONFLICT (username) DO NOTHING
        RETURNING id, name, description, price `, [id, name, description, price]);
        return videoGame;
    } catch (error) {
        throw error;
    }
}

// PUT - /api/video-games/:id - update a single video game by id
async function updateVideoGame(id, fields = {}) {
    try {
        const {rows} = await client.query(sqlString, params)
          let sql = [];
          const params = [];
        
          Object.keys(fields).forEach(key => {
            const value = userObj[key];
            sql.push(`${key} = $${params.length + 1}`);
            params.push(value);
          });
        
          const sqlString = 'UPDATE users set ' + sql.join(' AND ') + ` where id = ${id}`;
        
          return [sqlString, params];
        
    
        }catch(error) {
          throw error;
      }
}

// DELETE - /api/video-games/:id - delete a single video game by id
async function deleteVideoGame(id) {
    try {
        const {rows} = await client.query(`
        DELETE from video-games WHERE id = $1`, [id])
  
          
      } catch(error) {
          throw error;
      }
}

module.exports = {
    getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame
}