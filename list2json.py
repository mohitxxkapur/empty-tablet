import json
import re

INPUT_FILE = "BLANK_SLATE_GAME_LIST_OF_CUE_CARDS.txt"
OUTPUT_FILE = "cards.json"

def parse_cards(filename):
    cards = []
    current_side = None

    with open(filename, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()

            # Detect section headers
            if line.startswith("FRONT"):
                current_side = "front"
                continue
            if line.startswith("BACK"):
                current_side = "back"
                continue

            # Match lines like "001. PEA ____"
            match = re.match(r"(\d+)\.\s+(.*)", line)
            if match and current_side:
                card_id = int(match.group(1))
                text = match.group(2).strip()

                cards.append({
                    "id": card_id,
                    "side": current_side,
                    "text": text
                })

    return cards


def save_json(cards, output_filename):
    with open(output_filename, "w", encoding="utf-8") as f:
        json.dump(cards, f, indent=4, ensure_ascii=False)
    print(f"Saved {len(cards)} cards to {output_filename}")


if __name__ == "__main__":
    cards = parse_cards(INPUT_FILE)
    save_json(cards, OUTPUT_FILE)
