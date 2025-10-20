const callbacks = [];

runCallbacks = () => {
    callbacks.forEach(cb => cb());
};

window.addEventListener('load', () => {
    console.log('Document loaded.');
    setTimeout(() => {
        console.log('Running callbacks after 10 seconds delay.');
        runCallbacks();
    }, 10000);
});