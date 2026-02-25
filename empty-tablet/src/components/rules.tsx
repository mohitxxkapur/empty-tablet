export default function RulesContent() { 
    return ( 
        <> 
            <h2 className="rules-title">Game Rules</h2>
            <h2 className="rules-subtitle">Game Objective</h2>
            <p className="rules-text">The main goal of Empty Tablet is to reach the score limit by matching your answers with other players.</p>
            <p className="rules-text">Points will be distributed as follows: </p>
                <ul className = "rules-list">
                    <li>3 points if you match with <strong>only one</strong> other person</li>
                    <li>1 point if you match with <strong> 2 or more</strong> others</li>
                    <li>0 points if you match with <strong>nobody else</strong></li>
                </ul>
            <h2 className="rules-subtitle">Getting Started</h2>
            <p className="rules-text">First, choose a fun username, then click play. If you're hosting, click host and a lobby will be created with a unique code. Send that code to your friends and they can join!
                 If youre a player, enter in the room code provided by the host.
            </p>
            <p className="rules-text">Once in the lobby, the host will set the point limit, the round time limit, and choose the card set. The host will then start the game. Time to get creative!</p>
            <p className="rules-subtitle">Game flow</p>
                <ul className="gameflow-list">
                    <li>After a short countdown, the first card will be shown. Your answer will be typed in the text field under the card.</li>
                    <li>Once you have your answer, hit enter and it will be locked in until everyone else has entered their answers.</li>
                    <li>Everyones answers will be revealed and points will be assigned.<strong> 3 points for pairs, 1 point for more than 2 matches, 0 points for no matches.</strong></li>
                    <li>After a short delay, the next card will be revealed and the game continues!</li>
                    <li>The game ends once someone reaches the assigned score limit.</li>
                </ul>
            <p className="rules-subtitle">Helpful tips and tricks</p>
                <ul className="rules-list">
                    <li>Get silly with your answers, you never know who might think the same way!</li>
                    <li>Try and play around a person. If you can predict what someone will say, go with that</li>
                    <li>Don't stress if you're not able to match with others, all that matters is having fun and being creative.</li>
                </ul>
        </> 
    ) ; 
}