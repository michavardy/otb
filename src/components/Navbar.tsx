'use client'
import {NewGameResults}  from '../icons/NewGameResults' 
import {TopPlayers} from '../icons/TopPlayers'



export default function Navbar(){
    return(
        <div className="w-20% bg-gray-500 text-white p-2">
             <nav>
             <ul className="flex flex-col  items-center justify-center">
                <li>
                    <div>
                    <button><TopPlayers/></button>
                  <a
                    href="/top_players"
                    className="text-white hover:text-gray-600"
                  >
                    Top Players
                  </a>
                  </div>
                </li>
                <li>
                <div>
                    <button><NewGameResults/></button>
                  <a
                    href="/new_game_results"
                    className="text-white hover:text-gray-600"
                  >
                    New Game Results
                  </a>
                </div>
                </li>
                <li>

                  <a
                    href="/user_stats"
                    className="text-white hover:text-gray-600"
                  >
                    User Stats
                  </a>
                </li>
              </ul>
             </nav>
        </div>
    )
}