type User = {
    name: string;
    lastName: string;
    birthday: string;
    age?: number;
}

const gabriel: User = {
    name: 'gabriel',
    lastName: 'ramos',
    birthday: '29/01/1996'
}

// union types
// | (como se fosse o ||)
type LogLevel = 'info' | 'error' | 'debug';
function logMessage(message: string, level: LogLevel) {
    console.log(`[${level}] - ${message}`)
}

logMessage('Uma mensagem info', 'error')
logMessage('Uma mensagem info', 'info')
logMessage('Uma mensagem info', 'debug')
// logMessage('Uma mensagem info', 'erro')

// intersection types: &
type About = {
    bio: string;
    interests: string[]
}

type Profile = User & About;
const userWithProfile: Profile = {
    name: 'gabriel',
    lastName: 'ramos',
    birthday: '29/01/1996',
    bio: 'Olá, meu nome é gabriel',
    interests: ['gatos', 'música', 'fotografia']
}

type ComposedProfile = User & {
    log: LogLevel;
}