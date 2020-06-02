/**
 * @jsx jsx
 */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";

import SanitizeHTML from "sanitize-html";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

/**
 * A component representing a poem.
 * 

 * @param props
 */
const Poem: React.FC<{
  title: string;
  author: string;
  notes?: string;

  /**
   * Should be the text of the poem
   */
  children?: string | never[];
}> = (props) => {
  return (
    <div>
      <div
        className="header-section"
        css={css`
          text-align: center;
        `}
      >
        <h3>{props.title}</h3>
        <h4 className="author">by {props.author}</h4>
        <p css={css``}>{props.notes}</p>
      </div>

      <p>{props.children}</p>
    </div>
  );
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Poetry.digital</h1> */}
    <Poem
      title="Illiad"
      author="Homer"
      notes={SanitizeHTML("Translated by Samuel Butler. Avaliable on <a href='http://www.gutenberg.org/files/2199/2199-h/2199-h.htm'>Project Gutenburg</a>")}"
    >
      Sing, O goddess, the anger of Achilles son of Peleus, that brought
      countless ills upon the Achaeans. Many a brave soul did it send hurrying
      down to Hades, and many a hero did it yield a prey to dogs and vultures,
      for so were the counsels of Jove fulfilled from the day on which the son
      of Atreus, king of men, and great Achilles, first fell out with one
      another. And which of the gods was it that set them on to quarrel? It was
      the son of Jove and Leto; for he was angry with the king and sent a
      pestilence upon the host to plague the people, because the son of Atreus
      had dishonoured Chryses his priest. Now Chryses had come to the ships of
      the Achaeans to free his daughter, and had brought with him a great
      ransom: moreover he bore in his hand the sceptre of Apollo wreathed with a
      suppliant’s wreath, and he besought the Achaeans, but most of all the two
      sons of Atreus, who were their chiefs. “Sons of Atreus,” he cried, “and
      all other Achaeans, may the gods who dwell in Olympus grant you to sack
      the city of Priam, and to reach your homes in safety; but free my
      daughter, and accept a ransom for her, in reverence to Apollo, son of
      Jove.” On this the rest of the Achaeans with one voice were for respecting
      the priest and taking the ransom that he offered; but not so Agamemnon,
      who spoke fiercely to him and sent him roughly away. “Old man,” said he,
      “let me not find you tarrying about our ships, nor yet coming hereafter.
      Your sceptre of the god and your wreath shall profit you nothing. I will
      not free her. She shall grow old in my house at Argos far from her own
      home, busying herself with her loom and visiting my couch; so go, and do
      not provoke me or it shall be the worse for you.” The old man feared him
      and obeyed. Not a word he spoke, but went by the shore of the sounding sea
      and prayed apart to King Apollo whom lovely Leto had borne. “Hear me,” he
      cried, “O god of the silver bow, that protectest Chryse and holy Cilla and
      rulest Tenedos with thy might, hear me oh thou of Sminthe. If I have ever
      decked your temple with garlands, or burned your thigh-bones in fat of
      bulls or goats, grant my prayer, and let your arrows avenge these my tears
      upon the Danaans.” Thus did he pray, and Apollo heard his prayer. He came
      down furious from the summits of Olympus, with his bow and his quiver upon
      his shoulder, and the arrows rattled on his back with the rage that
      trembled within him. He sat himself down away from the ships with a face
      as dark as night, and his silver bow rang death as he shot his arrow in
      the midst of them. First he smote their mules and their hounds, but
      presently he aimed his shafts at the people themselves, and all day long
      the pyres of the dead were burning. For nine whole days he shot his arrows
      among the people, but upon the tenth day Achilles called them in
      assembly—moved thereto by Juno, who saw the Achaeans in their death-throes
      and had compassion upon them. Then, when they were got together, he rose
      and spoke among them. “Son of Atreus,” said he, “I deem that we should now
      turn roving home if we would escape destruction, for we are being cut down
      by war and pestilence at once. Let us ask some priest or prophet, or some
      reader of dreams (for dreams, too, are of Jove) who can tell us why
      Phoebus Apollo is so angry, and say whether it is for some vow that we
      have broken, or hecatomb that we have not offered, and whether he will
      accept the savour of lambs and goats without blemish, so as to take away
      the plague from us.” With these words he sat down, and Calchas son of
      Thestor, wisest of augurs, who knew things past present and to come, rose
      to speak. He it was who had guided the Achaeans with their fleet to Ilius,
      through the prophesyings with which Phoebus Apollo had inspired him. With
      all sincerity and goodwill he addressed them thus:— “Achilles, loved of
      heaven, you bid me tell you about the anger of King Apollo, I will
      therefore do so; but consider first and swear that you will stand by me
      heartily in word and deed, for I know that I shall offend one who rules
      the Argives with might, to whom all the Achaeans are in subjection. A
      plain man cannot stand against the anger of a king, who if he swallow his
      displeasure now, will yet nurse revenge till he has wreaked it. Consider,
      therefore, whether or no you will protect me.” And Achilles answered,
      “Fear not, but speak as it is borne in upon you from heaven, for by
      Apollo, Calchas, to whom you pray, and whose oracles you reveal to us, not
      a Danaan at our ships shall lay his hand upon you, while I yet live to
      look upon the face of the earth—no, not though you name Agamemnon himself,
      who is by far the foremost of the Achaeans.” Thereon the seer spoke
      boldly. “The god,” he said, “is angry neither about vow nor hecatomb, but
      for his priest’s sake, whom Agamemnon has dishonoured, in that he would
      not free his daughter nor take a ransom for her; therefore has he sent
      these evils upon us, and will yet send others. He will not deliver the
      Danaans from this pestilence till Agamemnon has restored the girl without
      fee or ransom to her father, and has sent a holy hecatomb to Chryse. Thus
      we may perhaps appease him.” With these words he sat down, and Agamemnon
      rose in anger. His heart was black with rage, and his eyes flashed fire as
      he scowled on Calchas and said, “Seer of evil, you never yet prophesied
      smooth things concerning me, but have ever loved to foretell that which
      was evil. You have brought me neither comfort nor performance; and now you
      come seeing among Danaans, and saying that Apollo has plagued us because I
      would not take a ransom for this girl, the daughter of Chryses. I have set
      my heart on keeping her in my own house, for I love her better even than
      my own wife Clytemnestra, whose peer she is alike in form and feature, in
      understanding and accomplishments. Still I will give her up if I must, for
      I would have the people live, not die; but you must find me a prize
      instead, or I alone among the Argives shall be without one. This is not
      well; for you behold, all of you, that my prize is to go elsewhither.” And
      Achilles answered, “Most noble son of Atreus, covetous beyond all mankind,
      how shall the Achaeans find you another prize? We have no common store
      from which to take one. Those we took from the cities have been awarded;
      we cannot disallow the awards that have been made already. Give this girl,
      therefore, to the god, and if ever Jove grants us to sack the city of Troy
      we will requite you three and fourfold.” Then Agamemnon said, “Achilles,
      valiant though you be, you shall not thus outwit me. You shall not
      overreach and you shall not persuade me. Are you to keep your own prize,
      while I sit tamely under my loss and give up the girl at your bidding? Let
      the Achaeans find me a prize in fair exchange to my liking, or I will come
      and take your own, or that of Ajax or of Ulysses; and he to whomsoever I
      may come shall rue my coming. But of this we will take thought hereafter;
      for the present, let us draw a ship into the sea, and find a crew for her
      expressly; let us put a hecatomb on board, and let us send Chryseis also;
      further, let some chief man among us be in command, either Ajax, or
      Idomeneus, or yourself, son of Peleus, mighty warrior that you are, that
      we may offer sacrifice and appease the anger of the god.” Achilles scowled
      at him and answered, “You are steeped in insolence and lust of gain. With
      what heart can any of the Achaeans do your bidding, either on foray or in
      open fighting? I came not warring here for any ill the Trojans had done
      me. I have no quarrel with them. They have not raided my cattle nor my
      horses, nor cut down my harvests on the rich plains of Phthia; for between
      me and them there is a great space, both mountain and sounding sea. We
      have followed you, Sir Insolence! for your pleasure, not ours—to gain
      satisfaction from the Trojans for your shameless self and for Menelaus.
      You forget this, and threaten to rob me of the prize for which I have
      toiled, and which the sons of the Achaeans have given me. Never when the
      Achaeans sack any rich city of the Trojans do I receive so good a prize as
      you do, though it is my hands that do the better part of the fighting.
      When the sharing comes, your share is far the largest, and I, forsooth,
      must go back to my ships, take what I can get and be thankful, when my
      labour of fighting is done. Now, therefore, I shall go back to Phthia; it
      will be much better for me to return home with my ships, for I will not
      stay here dishonoured to gather gold and substance for you.” And Agamemnon
      answered, “Fly if you will, I shall make you no prayers to stay you. I
      have others here who will do me honour, and above all Jove, the lord of
      counsel. There is no king here so hateful to me as you are, for you are
      ever quarrelsome and ill-affected. What though you be brave? Was it not
      heaven that made you so? Go home, then, with your ships and comrades to
      lord it over the Myrmidons. I care neither for you nor for your anger; and
      thus will I do: since Phoebus Apollo is taking Chryseis from me, I shall
      send her with my ship and my followers, but I shall come to your tent and
      take your own prize Briseis, that you may learn how much stronger I am
      than you are, and that another may fear to set himself up as equal or
      comparable with me.” The son of Peleus was furious, and his heart within
      his shaggy breast was divided whether to draw his sword, push the others
      aside, and kill the son of Atreus, or to restrain himself and check his
      anger. While he was thus in two minds, and was drawing his mighty sword
      from its scabbard, Minerva came down from heaven (for Juno had sent her in
      the love she bore to them both), and seized the son of Peleus by his
      yellow hair, visible to him alone, for of the others no man could see her.
      Achilles turned in amaze, and by the fire that flashed from her eyes at
      once knew that she was Minerva. “Why are you here,” said he, “daughter of
      aegis-bearing Jove? To see the pride of Agamemnon, son of Atreus? Let me
      tell you—and it shall surely be—he shall pay for this insolence with his
      life.” And Minerva said, “I come from heaven, if you will hear me, to bid
      you stay your anger. Juno has sent me, who cares for both of you alike.
      Cease, then, this brawling, and do not draw your sword; rail at him if you
      will, and your railing will not be vain, for I tell you—and it shall
      surely be—that you shall hereafter receive gifts three times as splendid
      by reason of this present insult. Hold, therefore, and obey.” “Goddess,”
      answered Achilles, “however angry a man may be, he must do as you two
      command him. This will be best, for the gods ever hear the prayers of him
      who has obeyed them.” He stayed his hand on the silver hilt of his sword,
      and thrust it back into the scabbard as Minerva bade him. Then she went
      back to Olympus among the other gods, and to the house of aegis-bearing
      Jove. But the son of Peleus again began railing at the son of Atreus, for
      he was still in a rage. “Wine-bibber,” he cried, “with the face of a dog
      and the heart of a hind, you never dare to go out with the host in fight,
      nor yet with our chosen men in ambuscade. You shun this as you do death
      itself. You had rather go round and rob his prizes from any man who
      contradicts you. You devour your people, for you are king over a feeble
      folk; otherwise, son of Atreus, henceforward you would insult no man.
      Therefore I say, and swear it with a great oath—nay, by this my sceptre
      which shalt sprout neither leaf nor shoot, nor bud anew from the day on
      which it left its parent stem upon the mountains—for the axe stripped it
      of leaf and bark, and now the sons of the Achaeans bear it as judges and
      guardians of the decrees of heaven—so surely and solemnly do I swear that
      hereafter they shall look fondly for Achilles and shall not find him. In
      the day of your distress, when your men fall dying by the murderous hand
      of Hector, you shall not know how to help them, and shall rend your heart
      with rage for the hour when you offered insult to the bravest of the
      Achaeans.”
    </Poem>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
