import { useState,useEffect } from "react";
const verses = [
  "The Lord is my shepherd; I shall not want. — Psalm 23:1",
  "God is our refuge and strength, an ever-present help in trouble. — Psalm 46:1",
  "Cast all your anxiety on Him because He cares for you. — 1 Peter 5:7",
  "The Lord will fight for you; you need only to be still. — Exodus 14:14",
  "I can do all things through Christ who strengthens me. — Philippians 4:13",
  "The joy of the Lord is your strength. — Nehemiah 8:10",
  "The Lord bless you and keep you. — Numbers 6:24",
  "Your word is a lamp to my feet and a light to my path. — Psalm 119:105",
  "Be strong and courageous, for the Lord your God goes with you. — Joshua 1:9",
  "Trust in the Lord with all your heart. — Proverbs 3:5",
  "The Lord is near to the brokenhearted. — Psalm 34:18",
  "My grace is sufficient for you. — 2 Corinthians 12:9",
  "He heals the brokenhearted and binds up their wounds. — Psalm 147:3",
  "The Lord will keep you from all harm. — Psalm 121:7",
  "The peace of God will guard your hearts and minds. — Philippians 4:7",
  "The Lord is good, a refuge in times of trouble. — Nahum 1:7",
  "Commit your way to the Lord; trust in Him. — Psalm 37:5",
  "I will never leave you nor forsake you. — Hebrews 13:5",
  "Do not be afraid; I am with you. — Isaiah 41:10",
  "You will keep in perfect peace those whose minds are steadfast. — Isaiah 26:3",
  "My God will meet all your needs. — Philippians 4:19",
  "The righteous cry out, and the Lord hears them. — Psalm 34:17",
  "The Lord is my light and my salvation—whom shall I fear? — Psalm 27:1",
  "Let the peace of Christ rule in your hearts. — Colossians 3:15",
  "The Lord is faithful, and He will strengthen you. — 2 Thessalonians 3:3",
  "The Lord upholds all who fall. — Psalm 145:14",
  "Be still, and know that I am God. — Psalm 46:10",
  "The Lord delights in those who trust in His love. — Psalm 147:11",
  "Those who hope in the Lord will renew their strength. — Isaiah 40:31",
  "The Lord is gracious and compassionate. — Psalm 145:8",
  "I am with you always. — Matthew 28:20",
];

export default function Verses() {
const [randomNum, setRandomNum] = useState(0);

  function getRandomDay() {
    return Math.floor(Math.random() * 31);
  }

  useEffect(() => {
    const id = setInterval(() => {
      setRandomNum(getRandomDay());
    }, 30000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="verses"> 
      <i>
        {`🙏 ${verses[randomNum]}`}
      </i>
    </div> )

}