const callbacks = [];

const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

runCallbacks = () => {
    callbacks.forEach(cb => cb());
};

function trackAdDimensions() {
    console.log(`Ad dimensions - Width: ${width}, Height: ${height}`);
}

window.addEventListener('load', () => {
    console.log('Document loaded.');
    localStorage.setItem('testKeyRemote', 'testValueRemote');
    trackAdDimensions();
    setTimeout(() => {
        console.log('Running callbacks after 10 seconds delay.');
        console.log(localStorage.getItem('testKeyRemote'));
        runCallbacks();
    }, 5000);
});