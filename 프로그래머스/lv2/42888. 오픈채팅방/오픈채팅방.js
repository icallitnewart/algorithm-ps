function solution(record) {
    const chats = [];
    const users = new Map();

    for (const input of record) {
        const [type, uid, nickname] = input.split(' ');

        switch (type) {
            case 'Enter':
                users.set(uid, nickname);
                chats.push([uid, type]);
                break;

            case 'Leave':
                chats.push([uid, type]);
                break;

            case 'Change':
                users.set(uid, nickname);
                break;

            default:
                break;
        }
    }

    return chats
            .map(([uid, type]) => {
                const nickname = users.get(uid);
                if (type === 'Enter') return `${nickname}님이 들어왔습니다.`;
                if (type === 'Leave') return `${nickname}님이 나갔습니다.`;
            });
}