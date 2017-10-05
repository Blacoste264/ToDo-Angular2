export class Init {
    load() {
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
            console.log('No todos found...creating...')
            var todos = [
                {
                    text: 'Pick up kids from school.'
                },
                {
                    text: 'Watch scary movies'
                },
                {
                    text: 'Try it out!'
                }
            ];

        localStorage.setItem('todos', JSON.stringify(todos))
        return 
        } else {
            console.log('Found Todos...')
        }
    }
}