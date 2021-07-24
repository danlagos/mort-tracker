<template>
  <v-container>
    <h1>Sign up</h1>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field label="first name" outlined></v-text-field>
        </v-col>
        <v-col>
          <v-text-field label="last name" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="user name" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="Email" type="email" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="password"
            type="password"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
