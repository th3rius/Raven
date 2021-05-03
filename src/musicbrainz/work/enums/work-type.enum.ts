import {registerEnumType} from '@nestjs/graphql';

/**
 * The type of work.
 */
export enum WorkType {
  /**
   * An aria is a self-contained piece for one voice usually with orchestral
   * accompaniment. They are most common inside operas, but also appear in
   * cantatas, oratorios and even on their own (concert arias).
   */
  Aria = 1,

  /**
   * A ballet is music composed to be used, together with a choreography, for a
   * ballet dance production.
   */
  Ballet,

  /**
   * A cantata is a vocal (often choral) composition with an instrumental
   * (usually orchestral) accompaniment, typically in several movements.
   */
  Cantata,

  /**
   * A concerto is a musical work for soloist(s) accompanied by an orchestra.
   */
  Concerto,

  /**
   * "Sonata" is a general term used to describe small scale (very often solo
   * or solo + keyboard) instrumental works, initially in baroque music.
   */
  Sonata,

  /**
   * A suite is an ordered set of instrumental or orchestral pieces normally
   * performed in a concert setting. They may be extracts from a ballet or
   * opera, or entirely original movements.
   */
  Suite,

  /**
   * The madrigal is a type of secular vocal music composition. In its original
   * form, it had no instrumental accompaniment, although accompaniment is much
   * more common in later madrigals.
   */
  Madrigal,

  /**
   * A mass is a choral composition that sets the invariable portions of the
   * Christian Eucharistic liturgy (Kyrie - Gloria - Credo - Sanctus -
   * Benedictus - Agnus Dei, with other portions sometimes added) to music.
   */
  Mass,

  /**
   * "Motet" is a term that applies to different types of (usually
   * unaccompanied) choral works. What exactly is a motet depends quite a bit
   * on the period.
   */
  Motet,

  /**
   * An opera is a dramatised work (text + musical score) for singers and
   * orchestra/ensemble. In true operas all dialog is sung, through arias and
   * recitatives, but some styles of opera include spoken dialogue.
   */
  Opera,

  /**
   * An oratorio is a large (usually sacred) musical composition including an
   * orchestra, a choir, and soloists. While it has characters and a plot, it
   * is usually not performed theatrically (it lacks costumes, props and strong
   * character interaction).
   */
  Oratorio,

  /**
   * An overture is, generally, the instrumental introduction to an opera.
   * Independent ("concert") overtures also exist, which are generally
   * programmatic works shorter than a symphonic poem.
   */
  Overture,

  /**
   * A partita is an instrumental piece composed of a series of variations, and
   * it's by its current definition very similar to a suite.
   */
  Partita,

  /**
   * A quartet is a musical composition scored for four voices or instruments.
   */
  Quartet,

  /**
   * A song cycle is a group of songs designed to be performed in a sequence as
   * a single entity. In most cases, all of the songs are by the same composer,
   * and often use words from the same poet or lyricist.
   */
  SongCycle,

  /**
   * A symphony is an extended composition, almost always scored for orchestra
   * without soloists.
   */
  Symphony,

  /**
   * A song is in its origin (and still in most cases) a composition for voice,
   * with or without instruments, performed by singing. This is the most common
   * form by far in folk and popular music, but also fairly common in a
   * classical context ("art songs").
   */
  Song,

  /**
   * A symphonic poem is a piece of programmatic orchestral music, usually in a
   * single movement, that evokes a painting, a landscape, the content of a
   * poem, a story or novel, or other non-musical source.
   */
  SymphonicPoem,

  /**
   * A zarzuela is a Spanish lyric-dramatic work that alternates between spoken
   * and sung scenes, the latter incorporating operatic and popular song, as
   * well as dance.
   */
  Zarzuela,

  /**
   * An étude is an instrumental musical composition, most commonly of
   * considerable difficulty, usually designed to provide practice material for
   * perfecting a particular technical skill.
   */
  Etude,

  /**
   * A poem is a literary piece, generally short and in verse, where words are
   * usually chosen for their sound and for the images and ideas they suggest.
   */
  Poem,

  /**
   * A soundtrack is the music that accompanies a film, TV program, videogame,
   * or even book.
   */
  Soundtrack,

  /**
   * This represents literary works written in prose, that is, written in
   * relatively ordinary language without metrical structure (e.g. novels,
   * short stories, essays...).
   */
  Prose,

  /**
   * The operetta is a genre of light opera, in terms both of music and subject
   * matter. Operettas are generally short and include spoken parts.
   */
  Operetta,

  /**
   * An audio drama is a dramatized, purely acoustic performance, broadcast on
   * radio or published on an audio medium (tape, CD, etc.).
   */
  AudioDrama,

  /**
   * Beijing opera is a form of traditional Chinese theatre which combines
   * music, vocal performance, mime, dance, and acrobatics.
   */
  BeijingOpera,

  /**
   * A play is a form of literature usually consisting of scripted dialogue
   * between characters, and intended for theatrical performance rather than
   * just reading.
   */
  Play,

  /**
   * Musical theatre is a form of theatrical performance that combines songs,
   * spoken dialogue, acting, and dance.
   */
  Musical,

  /**
   * Incidental music is music written as background for (usually) a theatre
   * play.
   */
  IncidentalMusic,
}

registerEnumType(WorkType, {name: 'WorkType'});
