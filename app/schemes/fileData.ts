import z from "zod";

const serializedListScheme = z.array(
  z.object({
    SceneName: z.string(),
    ID: z.string(),
    Value: z.boolean(),
    Mutator: z.number(),
  })
);

const savedDataScheme = z.array(
  z.object({
    Name: z.string(),
    Data: z.object({
      HasBeenSeen: z.boolean(),
      IsAccepted: z.boolean(),
      CompletedCount: z.number(),
      IsCompleted: z.boolean(),
      WasEverCompleted: z.boolean(),
    }),
  })
);

const fileContextScheme = z.object({
  playerData: z
    .object({
      QuestCompletionData: z.object({
        savedData: savedDataScheme,
      }),
    })
    .catchall(z.unknown()),
  sceneData: z
    .object({
      persistentBools: z.object({
        serializedList: serializedListScheme,
      }),
    })
    .catchall(z.unknown()),
});

type TFileContext = z.infer<typeof fileContextScheme>;

export { fileContextScheme };
export type { TFileContext };
