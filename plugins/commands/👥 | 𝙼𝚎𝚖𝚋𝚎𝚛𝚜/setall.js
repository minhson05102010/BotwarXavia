const config = {
		name: "set",
		aliases: ["set"],
		description: "set biet danh cho toan bo thanh vien trong nhom",
		usage: "[cl]/[bietdanh]",
		cooldown: 1,
		permissions: [2],
		credits: "",
		extra: {}
}

async function onCall({ message, args }) {
		const { api } = global;
		const isEmptyAll = args[0]?.toLowerCase() === "cl";

		if (isEmptyAll) {
			for (const p of message.participantIDs) {
			await api.changeNickname(null, message.threadID, p);
				//await new Promise((r) => setTimeout(r, 100));
			}

			return message.reply("đọ set không 😂😂👍");
		}

		const nickname = args.join(" ")
  
 
		if (!nickname) return message.reply("óc chó sài lệnh kiểu 🤢👈");
      for (const p of message.participantIDs) {
      
			await api.changeNickname(nickname, message.threadID, p);
			  //await new Promise((r) => setTimeout(r, 200));
		}

		return message.reply(`HKHIET Bá CMNR 💞`);
}


export default {
		config,
		onCall
}

