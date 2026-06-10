'use client';
import { useState, useEffect } from 'react';

const CURRENCIES = { EUR: 1, USD: 1.05, GBP: 0.85, CNY: 7.6 };

const REAL_PRICING: Record<string, any> = {
  santorini: {
    region: "Cyclades",
    budget_meal: 18,
    midrange_meal: 42,
    luxury_meal: 90,
    coffee: 4.5,
    beer_bar: 7,
    cocktail: 14,
    water_bottle: 1.5,
    taxi_5km: 14,
    bus_ticket: 2.5,
    atv_scooter_day: 35,
    car_rental_day: 65,
    avg_hotel_low: 120,
    avg_hotel_may_june: 160,
    avg_hotel_july_aug: 300,
    avg_hotel_sept_oct: 175,
    avg_daily_budget_backpacker: 80,
    avg_daily_budget_midrange: 180,
    avg_daily_budget_luxury: 450,
    airport_transfer: 25,
    crowd_level_july_aug: "very_high",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "medium_low",
    best_for: ["couples", "honeymoon", "photography", "wine"],
    not_ideal_for: ["budget_travel", "families_with_kids", "party"],
    beach_score: 6,
    nightlife_score: 5,
    family_score: 5,
    value_score: 4,
    food_score: 9,
    nature_score: 8,
    history_score: 9
  },

  delphi: {
    region: "Central Greece",
    budget_meal: 11,
    midrange_meal: 22,
    luxury_meal: 45,
    coffee: 3,
    beer_bar: 4,
    cocktail: 8,
    water_bottle: 1,
    taxi_5km: 9,
    bus_ticket: 1.5,
    atv_scooter_day: null,
    car_rental_day: 38,
    avg_hotel_low: 55,
    avg_hotel_may_june: 75,
    avg_hotel_july_aug: 105,
    avg_hotel_sept_oct: 80,
    avg_daily_budget_backpacker: 50,
    avg_daily_budget_midrange: 95,
    avg_daily_budget_luxury: 210,
    airport_transfer: null,
    crowd_level_july_aug: "high",
    crowd_level_may_june: "medium_high",
    crowd_level_sept_oct: "medium",
    best_for: [
      "history",
      "archaeology",
      "UNESCO",
      "day_trip_from_athens",
      "culture",
      "mythology",
      "mountain_scenery"
    ],
    not_ideal_for: [
      "beach_holiday",
      "nightlife",
      "luxury_resorts",
      "long_stays"
    ],
    beach_score: 0,
    nightlife_score: 2,
    family_score: 8,
    value_score: 8,
    food_score: 6,
    nature_score: 8,
    history_score: 10
  },

  kalamata: {
    region: "Peloponnese",
    budget_meal: 11,
    midrange_meal: 23,
    luxury_meal: 50,
    coffee: 3,
    beer_bar: 4.5,
    cocktail: 9,
    water_bottle: 0.8,
    taxi_5km: 8,
    bus_ticket: 1.5,
    atv_scooter_day: null,
    car_rental_day: 36,
    avg_hotel_low: 55,
    avg_hotel_may_june: 80,
    avg_hotel_july_aug: 120,
    avg_hotel_sept_oct: 85,
    avg_daily_budget_backpacker: 48,
    avg_daily_budget_midrange: 95,
    avg_daily_budget_luxury: 210,
    airport_transfer: 12,
    crowd_level_july_aug: "medium",
    crowd_level_may_june: "low_medium",
    crowd_level_sept_oct: "low",
    best_for: [
      "beaches",
      "olives_and_food",
      "peloponnese_base",
      "authentic_greece",
      "city_and_sea",
      "families"
    ],
    not_ideal_for: [
      "nightlife",
      "luxury_resorts",
      "island_feel"
    ],
    beach_score: 7,
    nightlife_score: 5,
    family_score: 8,
    value_score: 9,
    food_score: 9,
    nature_score: 7,
    history_score: 7
  },

  mykonos: {
    region: "Cyclades",
    budget_meal: 20,
    midrange_meal: 50,
    luxury_meal: 120,
    coffee: 5,
    beer_bar: 8,
    cocktail: 18,
    water_bottle: 2,
    taxi_5km: 15,
    bus_ticket: 2,
    atv_scooter_day: 40,
    car_rental_day: 70,
    avg_hotel_low: 130,
    avg_hotel_may_june: 180,
    avg_hotel_july_aug: 300,
    avg_hotel_sept_oct: 190,
    avg_daily_budget_backpacker: 90,
    avg_daily_budget_midrange: 220,
    avg_daily_budget_luxury: 600,
    airport_transfer: 25,
    crowd_level_july_aug: "very_high",
    crowd_level_may_june: "medium_high",
    crowd_level_sept_oct: "medium",
    best_for: ["party", "nightlife", "luxury", "beach_clubs", "lgbtq"],
    not_ideal_for: ["budget_travel", "families_with_kids", "quiet_holidays"],
    beach_score: 8,
    nightlife_score: 10,
    family_score: 4,
    value_score: 3,
    food_score: 7,
    nature_score: 5,
    history_score: 5
  },

  crete: {
    region: "Crete",
    budget_meal: 13,
    midrange_meal: 28,
    luxury_meal: 60,
    coffee: 3.5,
    beer_bar: 5,
    cocktail: 10,
    water_bottle: 1,
    taxi_5km: 10,
    bus_ticket: 2,
    atv_scooter_day: 25,
    car_rental_day: 35,
    avg_hotel_low: 60,
    avg_hotel_may_june: 90,
    avg_hotel_july_aug: 140,
    avg_hotel_sept_oct: 100,
    avg_daily_budget_backpacker: 55,
    avg_daily_budget_midrange: 110,
    avg_daily_budget_luxury: 280,
    airport_transfer: 15,
    crowd_level_july_aug: "high",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "medium_low",
    best_for: ["families", "food_lovers", "road_trips", "history", "hiking"],
    not_ideal_for: ["short_trips", "island_hopping_only"],
    beach_score: 9,
    nightlife_score: 6,
    family_score: 9,
    value_score: 8,
    food_score: 10,
    nature_score: 10,
    history_score: 10
  },

  chania: {
    region: "Crete",
    budget_meal: 14,
    midrange_meal: 30,
    luxury_meal: 65,
    coffee: 3.5,
    beer_bar: 5,
    cocktail: 11,
    water_bottle: 1,
    taxi_5km: 10,
    bus_ticket: 1.8,
    atv_scooter_day: 25,
    car_rental_day: 38,
    avg_hotel_low: 65,
    avg_hotel_may_june: 100,
    avg_hotel_july_aug: 160,
    avg_hotel_sept_oct: 110,
    avg_daily_budget_backpacker: 58,
    avg_daily_budget_midrange: 120,
    avg_daily_budget_luxury: 300,
    airport_transfer: 12,
    crowd_level_july_aug: "high",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "medium_low",
    best_for: ["couples", "food_lovers", "history", "old_town_walks", "beaches"],
    not_ideal_for: ["nightlife_seekers", "party"],
    beach_score: 9,
    nightlife_score: 5,
    family_score: 8,
    value_score: 8,
    food_score: 10,
    nature_score: 9,
    history_score: 9
  },

  rhodes: {
    region: "Dodecanese",
    budget_meal: 13,
    midrange_meal: 28,
    luxury_meal: 60,
    coffee: 3.5,
    beer_bar: 5,
    cocktail: 10,
    water_bottle: 1,
    taxi_5km: 10,
    bus_ticket: 2.5,
    atv_scooter_day: 25,
    car_rental_day: 35,
    avg_hotel_low: 55,
    avg_hotel_may_june: 90,
    avg_hotel_july_aug: 145,
    avg_hotel_sept_oct: 100,
    avg_daily_budget_backpacker: 55,
    avg_daily_budget_midrange: 110,
    avg_daily_budget_luxury: 260,
    airport_transfer: 20,
    crowd_level_july_aug: "very_high",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "medium_low",
    best_for: ["history", "families", "all_inclusive", "beaches", "medieval_town"],
    not_ideal_for: ["quiet_off_beaten_path"],
    beach_score: 8,
    nightlife_score: 7,
    family_score: 8,
    value_score: 7,
    food_score: 7,
    nature_score: 7,
    history_score: 10
  },

  corfu: {
    region: "Ionian Islands",
    budget_meal: 13,
    midrange_meal: 27,
    luxury_meal: 58,
    coffee: 3.5,
    beer_bar: 5,
    cocktail: 10,
    water_bottle: 1,
    taxi_5km: 10,
    bus_ticket: 1.8,
    atv_scooter_day: 25,
    car_rental_day: 38,
    avg_hotel_low: 55,
    avg_hotel_may_june: 85,
    avg_hotel_july_aug: 140,
    avg_hotel_sept_oct: 90,
    avg_daily_budget_backpacker: 55,
    avg_daily_budget_midrange: 105,
    avg_daily_budget_luxury: 250,
    airport_transfer: 15,
    crowd_level_july_aug: "very_high",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "low",
    best_for: ["families", "beaches", "green_scenery", "old_town", "british_tourists"],
    not_ideal_for: ["party", "ultra_luxury"],
    beach_score: 8,
    nightlife_score: 5,
    family_score: 9,
    value_score: 7,
    food_score: 7,
    nature_score: 9,
    history_score: 8
  },

  zakynthos: {
    region: "Ionian Islands",
    budget_meal: 13,
    midrange_meal: 26,
    luxury_meal: 55,
    coffee: 3.5,
    beer_bar: 5,
    cocktail: 10,
    water_bottle: 1,
    taxi_5km: 10,
    bus_ticket: 1.8,
    atv_scooter_day: 22,
    car_rental_day: 35,
    avg_hotel_low: 50,
    avg_hotel_may_june: 80,
    avg_hotel_july_aug: 130,
    avg_hotel_sept_oct: 85,
    avg_daily_budget_backpacker: 52,
    avg_daily_budget_midrange: 100,
    avg_daily_budget_luxury: 230,
    airport_transfer: 15,
    crowd_level_july_aug: "very_high",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "low",
    best_for: ["beaches", "navagio_shipwreck", "young_couples", "sea_turtles", "swimming"],
    not_ideal_for: ["history_lovers", "ultra_luxury", "quiet_travel"],
    beach_score: 10,
    nightlife_score: 6,
    family_score: 7,
    value_score: 7,
    food_score: 6,
    nature_score: 8,
    history_score: 5
  },

  skiathos: {
    region: "Sporades",
    budget_meal: 14,
    midrange_meal: 28,
    luxury_meal: 58,
    coffee: 3.5,
    beer_bar: 5,
    cocktail: 11,
    water_bottle: 1,
    taxi_5km: 10,
    bus_ticket: 2,
    atv_scooter_day: 25,
    car_rental_day: 40,
    avg_hotel_low: 60,
    avg_hotel_may_june: 90,
    avg_hotel_july_aug: 160,
    avg_hotel_sept_oct: 100,
    avg_daily_budget_backpacker: 55,
    avg_daily_budget_midrange: 110,
    avg_daily_budget_luxury: 260,
    airport_transfer: 15,
    crowd_level_july_aug: "very_high",
    crowd_level_may_june: "medium_high",
    crowd_level_sept_oct: "medium",
    best_for: ["beaches", "nightlife", "young_couples", "boat_trips", "families"],
    not_ideal_for: ["luxury_seekers", "quiet_travel", "history_lovers"],
    beach_score: 10,
    nightlife_score: 8,
    family_score: 7,
    value_score: 6,
    food_score: 7,
    nature_score: 9,
    history_score: 5
  },

  skopelos: {
    region: "Sporades",
    budget_meal: 13,
    midrange_meal: 26,
    luxury_meal: 55,
    coffee: 3,
    beer_bar: 4.5,
    cocktail: 10,
    water_bottle: 1,
    taxi_5km: 10,
    bus_ticket: 2,
    atv_scooter_day: 25,
    car_rental_day: 40,
    avg_hotel_low: 55,
    avg_hotel_may_june: 85,
    avg_hotel_july_aug: 150,
    avg_hotel_sept_oct: 95,
    avg_daily_budget_backpacker: 50,
    avg_daily_budget_midrange: 105,
    avg_daily_budget_luxury: 250,
    airport_transfer: 40,
    crowd_level_july_aug: "high",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "medium_low",
    best_for: ["couples", "nature", "food_lovers", "families", "photography", "off_season"],
    not_ideal_for: ["nightlife", "luxury_seekers", "party_travel"],
    beach_score: 9,
    nightlife_score: 3,
    family_score: 8,
    value_score: 8,
    food_score: 9,
    nature_score: 10,
    history_score: 7
  },

  kefalonia: {
    region: "Ionian Islands",
    budget_meal: 14,
    midrange_meal: 28,
    luxury_meal: 58,
    coffee: 3.5,
    beer_bar: 5,
    cocktail: 10,
    water_bottle: 1,
    taxi_5km: 12,
    bus_ticket: 1.8,
    atv_scooter_day: 25,
    car_rental_day: 40,
    avg_hotel_low: 55,
    avg_hotel_may_june: 90,
    avg_hotel_july_aug: 150,
    avg_hotel_sept_oct: 95,
    avg_daily_budget_backpacker: 58,
    avg_daily_budget_midrange: 115,
    avg_daily_budget_luxury: 280,
    airport_transfer: 20,
    crowd_level_july_aug: "high",
    crowd_level_may_june: "low_medium",
    crowd_level_sept_oct: "low",
    best_for: ["nature", "beaches", "couples", "hiking", "caves", "relaxed_vibe"],
    not_ideal_for: ["party", "nightlife", "all_inclusive_resorts"],
    beach_score: 10,
    nightlife_score: 4,
    family_score: 8,
    value_score: 7,
    food_score: 7,
    nature_score: 10,
    history_score: 6
  },

  paros: {
    region: "Cyclades",
    budget_meal: 15,
    midrange_meal: 32,
    luxury_meal: 65,
    coffee: 4,
    beer_bar: 6,
    cocktail: 12,
    water_bottle: 1.5,
    taxi_5km: 12,
    bus_ticket: 2,
    atv_scooter_day: 28,
    car_rental_day: 45,
    avg_hotel_low: 75,
    avg_hotel_may_june: 110,
    avg_hotel_july_aug: 190,
    avg_hotel_sept_oct: 120,
    avg_daily_budget_backpacker: 65,
    avg_daily_budget_midrange: 135,
    avg_daily_budget_luxury: 320,
    airport_transfer: 15,
    crowd_level_july_aug: "high",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "low_medium",
    best_for: ["windsurfing", "couples", "village_life", "balanced_holiday", "foodies"],
    not_ideal_for: ["ultra_luxury", "heavy_nightlife"],
    beach_score: 8,
    nightlife_score: 6,
    family_score: 7,
    value_score: 6,
    food_score: 8,
    nature_score: 7,
    history_score: 7
  },

  milos: {
    region: "Cyclades",
    budget_meal: 15,
    midrange_meal: 33,
    luxury_meal: 65,
    coffee: 4,
    beer_bar: 6,
    cocktail: 12,
    water_bottle: 1.5,
    taxi_5km: 13,
    bus_ticket: 2,
    atv_scooter_day: 30,
    car_rental_day: 48,
    avg_hotel_low: 80,
    avg_hotel_may_june: 120,
    avg_hotel_july_aug: 200,
    avg_hotel_sept_oct: 130,
    avg_daily_budget_backpacker: 68,
    avg_daily_budget_midrange: 145,
    avg_daily_budget_luxury: 340,
    airport_transfer: 15,
    crowd_level_july_aug: "high",
    crowd_level_may_june: "low_medium",
    crowd_level_sept_oct: "low",
    best_for: ["unique_beaches", "geology_lovers", "photography", "boat_trips", "couples"],
    not_ideal_for: ["nightlife", "all_inclusive", "families_with_toddlers"],
    beach_score: 10,
    nightlife_score: 3,
    family_score: 6,
    value_score: 6,
    food_score: 7,
    nature_score: 10,
    history_score: 7
  },

  athens: {
    region: "Attica",
    budget_meal: 12,
    midrange_meal: 28,
    luxury_meal: 70,
    coffee: 3.5,
    beer_bar: 5,
    cocktail: 12,
    water_bottle: 0.8,
    taxi_5km: 8,
    bus_ticket: 1.4,
    metro_ticket: 1.4,
    atv_scooter_day: null,
    car_rental_day: 35,
    avg_hotel_low: 70,
    avg_hotel_may_june: 100,
    avg_hotel_july_aug: 140,
    avg_hotel_sept_oct: 110,
    avg_daily_budget_backpacker: 55,
    avg_daily_budget_midrange: 120,
    avg_daily_budget_luxury: 320,
    airport_transfer: 12,
    crowd_level_july_aug: "very_high",
    crowd_level_may_june: "medium_high",
    crowd_level_sept_oct: "medium",
    best_for: ["history", "city_breaks", "food_scene", "nightlife", "acropolis", "culture"],
    not_ideal_for: ["beach_holiday", "relaxation_only"],
    beach_score: 4,
    nightlife_score: 9,
    family_score: 7,
    value_score: 7,
    food_score: 9,
    nature_score: 4,
    history_score: 10
  },

  lesvos: {
    region: "North Aegean",
    budget_meal: 11,
    midrange_meal: 22,
    luxury_meal: 45,
    coffee: 3,
    beer_bar: 4,
    cocktail: 8,
    water_bottle: 0.8,
    taxi_5km: 9,
    bus_ticket: 1.8,
    atv_scooter_day: 22,
    car_rental_day: 32,
    avg_hotel_low: 45,
    avg_hotel_may_june: 65,
    avg_hotel_july_aug: 95,
    avg_hotel_sept_oct: 65,
    avg_daily_budget_backpacker: 45,
    avg_daily_budget_midrange: 85,
    avg_daily_budget_luxury: 190,
    airport_transfer: 12,
    crowd_level_july_aug: "medium",
    crowd_level_may_june: "low",
    crowd_level_sept_oct: "low",
    best_for: ["authentic_greece", "food_culture", "ouzo", "geopark", "off_beaten_path", "birdwatching"],
    not_ideal_for: ["luxury_seekers", "beach_clubs", "party"],
    beach_score: 6,
    nightlife_score: 3,
    family_score: 7,
    value_score: 10,
    food_score: 10,
    nature_score: 9,
    history_score: 8
  },

  nafplio: {
    region: "Peloponnese",
    budget_meal: 12,
    midrange_meal: 26,
    luxury_meal: 55,
    coffee: 3.5,
    beer_bar: 5,
    cocktail: 10,
    water_bottle: 1,
    taxi_5km: 9,
    bus_ticket: 1.8,
    atv_scooter_day: null,
    car_rental_day: 38,
    avg_hotel_low: 65,
    avg_hotel_may_june: 95,
    avg_hotel_july_aug: 145,
    avg_hotel_sept_oct: 100,
    avg_daily_budget_backpacker: 55,
    avg_daily_budget_midrange: 105,
    avg_daily_budget_luxury: 250,
    airport_transfer: 90,
    crowd_level_july_aug: "high",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "medium_low",
    best_for: ["couples", "weekend_escapes", "history", "castles", "old_town", "peloponnese_base"],
    not_ideal_for: ["beach_holiday_only", "nightlife"],
    beach_score: 5,
    nightlife_score: 4,
    family_score: 7,
    value_score: 7,
    food_score: 8,
    nature_score: 7,
    history_score: 10
  },

  monemvasia: {
    region: "Peloponnese",
    budget_meal: 14,
    midrange_meal: 30,
    luxury_meal: 62,
    coffee: 3.5,
    beer_bar: 5,
    cocktail: 10,
    water_bottle: 1,
    taxi_5km: 10,
    bus_ticket: null,
    atv_scooter_day: null,
    car_rental_day: 40,
    avg_hotel_low: 80,
    avg_hotel_may_june: 120,
    avg_hotel_july_aug: 190,
    avg_hotel_sept_oct: 130,
    avg_daily_budget_backpacker: 65,
    avg_daily_budget_midrange: 130,
    avg_daily_budget_luxury: 310,
    airport_transfer: null,
    crowd_level_july_aug: "medium_high",
    crowd_level_may_june: "low_medium",
    crowd_level_sept_oct: "low",
    best_for: ["couples", "medieval_atmosphere", "unique_stays", "history", "off_beaten_path"],
    not_ideal_for: ["families_with_kids", "beach_holiday", "nightlife"],
    beach_score: 5,
    nightlife_score: 2,
    family_score: 5,
    value_score: 6,
    food_score: 7,
    nature_score: 7,
    history_score: 10
  },

  olympia: {
    region: "Peloponnese",
    budget_meal: 11,
    midrange_meal: 22,
    luxury_meal: 45,
    coffee: 3,
    beer_bar: 4,
    cocktail: 8,
    water_bottle: 1,
    taxi_5km: 9,
    bus_ticket: 1.5,
    atv_scooter_day: null,
    car_rental_day: 35,
    avg_hotel_low: 50,
    avg_hotel_may_june: 70,
    avg_hotel_july_aug: 100,
    avg_hotel_sept_oct: 70,
    avg_daily_budget_backpacker: 48,
    avg_daily_budget_midrange: 90,
    avg_daily_budget_luxury: 200,
    airport_transfer: null,
    crowd_level_july_aug: "high",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "medium_low",
    best_for: ["history_lovers", "ancient_ruins", "culture", "day_trips", "peloponnese_road_trip"],
    not_ideal_for: ["beach_holiday", "nightlife", "luxury"],
    beach_score: 2,
    nightlife_score: 2,
    family_score: 8,
    value_score: 8,
    food_score: 6,
    nature_score: 6,
    history_score: 10
  },

  thessaloniki: {
    region: "Northern Greece",
    budget_meal: 11,
    midrange_meal: 24,
    luxury_meal: 55,
    coffee: 3,
    beer_bar: 5,
    cocktail: 10,
    water_bottle: 0.8,
    taxi_5km: 7,
    bus_ticket: 1.2,
    atv_scooter_day: null,
    car_rental_day: 35,
    avg_hotel_low: 55,
    avg_hotel_may_june: 80,
    avg_hotel_july_aug: 100,
    avg_hotel_sept_oct: 85,
    avg_daily_budget_backpacker: 48,
    avg_daily_budget_midrange: 95,
    avg_daily_budget_luxury: 220,
    airport_transfer: 15,
    crowd_level_july_aug: "medium",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "medium",
    best_for: ["food_scene", "city_breaks", "nightlife", "history", "culture", "locals_vibe"],
    not_ideal_for: ["beach_holiday", "island_hopping"],
    beach_score: 3,
    nightlife_score: 9,
    family_score: 7,
    value_score: 9,
    food_score: 10,
    nature_score: 4,
    history_score: 9
  },

  halkidiki: {
    region: "Northern Greece",
    budget_meal: 12,
    midrange_meal: 25,
    luxury_meal: 55,
    coffee: 3.5,
    beer_bar: 5,
    cocktail: 10,
    water_bottle: 1,
    taxi_5km: 10,
    bus_ticket: 2,
    atv_scooter_day: 25,
    car_rental_day: 38,
    avg_hotel_low: 55,
    avg_hotel_may_june: 80,
    avg_hotel_july_aug: 130,
    avg_hotel_sept_oct: 80,
    avg_daily_budget_backpacker: 52,
    avg_daily_budget_midrange: 105,
    avg_daily_budget_luxury: 250,
    airport_transfer: 45,
    crowd_level_july_aug: "very_high",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "low",
    best_for: ["families", "beaches", "water_sports", "weekend_from_thessaloniki", "nature"],
    not_ideal_for: ["history_lovers", "ultra_luxury", "island_feel"],
    beach_score: 9,
    nightlife_score: 5,
    family_score: 10,
    value_score: 7,
    food_score: 6,
    nature_score: 8,
    history_score: 4
  },

  meteora: {
    region: "Thessaly",
    budget_meal: 11,
    midrange_meal: 22,
    luxury_meal: 45,
    coffee: 3,
    beer_bar: 4,
    cocktail: 8,
    water_bottle: 1,
    taxi_5km: 8,
    bus_ticket: 1.5,
    atv_scooter_day: null,
    car_rental_day: 35,
    avg_hotel_low: 55,
    avg_hotel_may_june: 75,
    avg_hotel_july_aug: 100,
    avg_hotel_sept_oct: 80,
    avg_daily_budget_backpacker: 50,
    avg_daily_budget_midrange: 95,
    avg_daily_budget_luxury: 200,
    airport_transfer: null,
    crowd_level_july_aug: "very_high",
    crowd_level_may_june: "medium_high",
    crowd_level_sept_oct: "medium",
    best_for: ["monasteries", "unique_landscapes", "photography", "hiking", "UNESCO", "spiritual"],
    not_ideal_for: ["beach_holiday", "nightlife", "pure_relaxation"],
    beach_score: 0,
    nightlife_score: 1,
    family_score: 7,
    value_score: 8,
    food_score: 5,
    nature_score: 10,
    history_score: 10
  },

  patmos: {
    region: "Dodecanese",
    budget_meal: 15,
    midrange_meal: 32,
    luxury_meal: 65,
    coffee: 4,
    beer_bar: 6,
    cocktail: 12,
    water_bottle: 1.5,
    taxi_5km: 12,
    bus_ticket: 2,
    atv_scooter_day: 25,
    car_rental_day: 45,
    avg_hotel_low: 75,
    avg_hotel_may_june: 110,
    avg_hotel_july_aug: 180,
    avg_hotel_sept_oct: 115,
    avg_daily_budget_backpacker: 65,
    avg_daily_budget_midrange: 130,
    avg_daily_budget_luxury: 300,
    airport_transfer: null,
    crowd_level_july_aug: "medium_high",
    crowd_level_may_june: "low_medium",
    crowd_level_sept_oct: "low",
    best_for: ["spiritual_travel", "couples", "unique_atmosphere", "UNESCO", "quiet_beaches"],
    not_ideal_for: ["nightlife", "families_with_teenagers", "budget_travel"],
    beach_score: 7,
    nightlife_score: 2,
    family_score: 6,
    value_score: 5,
    food_score: 7,
    nature_score: 7,
    history_score: 10
  },

  patras: {
    region: "Peloponnese",
    budget_meal: 10,
    midrange_meal: 22,
    luxury_meal: 48,
    coffee: 3,
    beer_bar: 4.5,
    cocktail: 9,
    water_bottle: 0.8,
    taxi_5km: 8,
    bus_ticket: 1.5,
    atv_scooter_day: null,
    car_rental_day: 35,
    avg_hotel_low: 60,
    avg_hotel_may_june: 90,
    avg_hotel_july_aug: 95,
    avg_hotel_sept_oct: 70,
    avg_daily_budget_backpacker: 45,
    avg_daily_budget_midrange: 88,
    avg_daily_budget_luxury: 195,
    airport_transfer: null,
    crowd_level_july_aug: "medium",
    crowd_level_may_june: "low_medium",
    crowd_level_sept_oct: "low",
    best_for: ["carnival", "city_break", "ferry_hub", "students", "nightlife", "local_culture"],
    not_ideal_for: ["beach_holiday", "luxury_resorts", "island_feel"],
    beach_score: 3,
    nightlife_score: 8,
    family_score: 6,
    value_score: 9,
    food_score: 7,
    nature_score: 4,
    history_score: 7
  },

  limnos: {
    region: "North Aegean",
    budget_meal: 12,
    midrange_meal: 24,
    luxury_meal: 48,
    coffee: 3.2,
    beer_bar: 4.5,
    cocktail: 9,
    water_bottle: 1,
    taxi_5km: 10,
    bus_ticket: 1.8,
    atv_scooter_day: 22,
    car_rental_day: 35,
    avg_hotel_low: 70,
    avg_hotel_may_june: 80,
    avg_hotel_july_aug: 155,
    avg_hotel_sept_oct: 70,
    avg_daily_budget_backpacker: 48,
    avg_daily_budget_midrange: 90,
    avg_daily_budget_luxury: 200,
    airport_transfer: 15,
    crowd_level_july_aug: "medium",
    crowd_level_may_june: "low",
    crowd_level_sept_oct: "low",
    best_for: ["authentic_greece", "flat_landscapes", "beaches", "windsurfing", "off_beaten_path", "local_food"],
    not_ideal_for: ["luxury_seekers", "nightlife", "party", "hill_scenery"],
    beach_score: 8,
    nightlife_score: 3,
    family_score: 8,
    value_score: 9,
    food_score: 8,
    nature_score: 7,
    history_score: 6
  },

  epirus_zagori: {
    region: "Epirus",
    budget_meal: 10,
    midrange_meal: 20,
    luxury_meal: 42,
    coffee: 2.8,
    beer_bar: 4,
    cocktail: 8,
    water_bottle: 0.8,
    taxi_5km: 8,
    bus_ticket: 1.5,
    atv_scooter_day: null,
    car_rental_day: 38,
    avg_hotel_low: 50,
    avg_hotel_may_june: 70,
    avg_hotel_july_aug: 100,
    avg_hotel_sept_oct: 75,
    avg_daily_budget_backpacker: 48,
    avg_daily_budget_midrange: 90,
    avg_daily_budget_luxury: 200,
    airport_transfer: null,
    crowd_level_july_aug: "medium",
    crowd_level_may_june: "low_medium",
    crowd_level_sept_oct: "low",
    best_for: ["hiking", "nature", "gorges", "stone_villages", "off_beaten_path", "winter_travel"],
    not_ideal_for: ["beach_holiday", "nightlife", "luxury_resorts"],
    beach_score: 0,
    nightlife_score: 1,
    family_score: 7,
    value_score: 9,
    food_score: 8,
    nature_score: 10,
    history_score: 7
  },
  thassos: {
    region: "North Aegean",
    budget_meal: 11,
    midrange_meal: 24,
    luxury_meal: 50,
    coffee: 3,
    beer_bar: 4.5,
    cocktail: 9,
    water_bottle: 0.8,
    taxi_5km: 8,
    bus_ticket: 1.5,
    atv_scooter_day: 25,
    car_rental_day: 35,
    avg_hotel_low: 55,
    avg_hotel_may_june: 80,
    avg_hotel_july_aug: 120,
    avg_hotel_sept_oct: 80,
    avg_daily_budget_backpacker: 48,
    avg_daily_budget_midrange: 95,
    avg_daily_budget_luxury: 220,
    airport_transfer: null,
    crowd_level_july_aug: "high",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "low_medium",
    best_for: ["beaches", "nature", "families", "history", "local_food", "hiking"],
    not_ideal_for: ["nightlife", "luxury_resorts", "party"],
    beach_score: 9,
    nightlife_score: 4,
    family_score: 8,
    value_score: 8,
    food_score: 8,
    nature_score: 9,
    history_score: 8
  },
  kos: {
    region: "Dodecanese",
    budget_meal: 12,
    midrange_meal: 25,
    luxury_meal: 55,
    coffee: 3,
    beer_bar: 4.5,
    cocktail: 9,
    water_bottle: 0.8,
    taxi_5km: 8,
    bus_ticket: 1.8,
    atv_scooter_day: 22,
    car_rental_day: 33,
    avg_hotel_low: 50,
    avg_hotel_may_june: 80,
    avg_hotel_july_aug: 130,
    avg_hotel_sept_oct: 85,
    avg_daily_budget_backpacker: 50,
    avg_daily_budget_midrange: 100,
    avg_daily_budget_luxury: 230,
    airport_transfer: 18,
    crowd_level_july_aug: "high",
    crowd_level_may_june: "medium",
    crowd_level_sept_oct: "medium_low",
    best_for: ["beaches", "families", "history", "watersports", "cycling"],
    not_ideal_for: ["nightlife", "luxury_resorts", "party"],
    beach_score: 8,
    nightlife_score: 5,
    family_score: 8,
    value_score: 7,
    food_score: 7,
    nature_score: 6,
    history_score: 9
  },

  hydra: {
    region: "Saronic Islands",
    budget_meal: 18,
    midrange_meal: 38,
    luxury_meal: 80,
    coffee: 4.5,
    beer_bar: 7,
    cocktail: 13,
    water_bottle: 1.5,
    taxi_5km: 0,
    bus_ticket: 0,
    atv_scooter_day: 0,
    car_rental_day: 0,
    avg_hotel_low: 100,
    avg_hotel_may_june: 150,
    avg_hotel_july_aug: 280,
    avg_hotel_sept_oct: 140,
    avg_daily_budget_backpacker: 70,
    avg_daily_budget_midrange: 180,
    avg_daily_budget_luxury: 400,
    airport_transfer: 35,
    crowd_level_july_aug: "medium",
    crowd_level_may_june: "low",
    crowd_level_sept_oct: "low",
    best_for: ["couples", "luxury", "culture", "photography", "art"],
    not_ideal_for: ["budget_travel", "families_with_kids", "party", "beach_lovers"],
    beach_score: 4,
    nightlife_score: 3,
    family_score: 5,
    value_score: 4,
    food_score: 7,
    nature_score: 6,
    history_score: 7
  }
};

const MONTH_LABELS: Record<string, { en: string; el: string }> = {
  january: { en: 'January', el: 'Ιανουάριος' },
  february: { en: 'February', el: 'Φεβρουάριος' },
  march: { en: 'March', el: 'Μάρτιος' },
  april: { en: 'April', el: 'Απρίλιος' },
  may: { en: 'May', el: 'Μάιος' },
  june: { en: 'June', el: 'Ιούνιος' },
  july: { en: 'July', el: 'Ιούλιος' },
  august: { en: 'August', el: 'Αύγουστος' },
  september: { en: 'September', el: 'Σεπτέμβριος' },
  october: { en: 'October', el: 'Οκτώβριος' },
  november: { en: 'November', el: 'Νοέμβριος' },
  december: { en: 'December', el: 'Δεκέμβριος' }
};

const BEST_FOR_LABELS: Record<string, { en: string; el: string }> = {
  couples: { en: "Couples", el: "Ζευγάρια" },
  honeymoon: { en: "Honeymoon", el: "Ταξίδι του Μέλιτος" },
  photography: { en: "Photography", el: "Φωτογραφία" },
  wine: { en: "Wine tasting", el: "Οινοτουρισμός" },
  party: { en: "Party", el: "Πάρτι" },
  nightlife: { en: "Nightlife", el: "Νυχτερινή Ζωή" },
  luxury: { en: "Luxury", el: "Πολυτέλεια" },
  beach_clubs: { en: "Beach Clubs", el: "Beach Clubs" },
  lgbtq: { en: "LGBTQ+", el: "LGBTQ+" },
  families: { en: "Families", el: "Οικογένειες" },
  food_lovers: { en: "Food Lovers", el: "Λάτρεις Φαγητού" },
  road_trips: { en: "Road Trips", el: "Road Trips" },
  history: { en: "History & Culture", el: "Ιστορία & Πολιτισμός" },
  hiking: { en: "Hiking", el: "Πεζοπορία" },
  old_town_walks: { en: "Old Town Walks", el: "Βόλτες στην Παλιά Πόλη" },
  beaches: { en: "Beaches", el: "Παραλίες" },
  medieval_town: { en: "Medieval Town", el: "Μεσαιωνική Πόλη" },
  green_scenery: { en: "Green Scenery", el: "Καταπράσινο Τοπίο" },
  british_tourists: { en: "British tourists base", el: "Βάση Βρετανών" },
  navagio_shipwreck: { en: "Navagio Shipwreck", el: "Ναυάγιο" },
  young_couples: { en: "Young Couples", el: "Νέα Ζευγάρια" },
  sea_turtles: { en: "Sea Turtles", el: "Θαλάσσιες Χελώνες" },
  swimming: { en: "Swimming", el: "Κολύμβηση" },
  nature: { en: "Nature", el: "Φύση" },
  caves: { en: "Caves", el: "Σπήλαια" },
  relaxed_vibe: { en: "Relaxed Vibe", el: "Χαλαροί Ρυθμοί" },
  windsurfing: { en: "Windsurfing", el: "Windsurfing" },
  village_life: { en: "Village Life", el: "Ζωή στο Χωριό" },
  balanced_holiday: { en: "Balanced Holiday", el: "Ισορροπημένες Διακοπές" },
  foodies: { en: "Foodies", el: "Γαστρονομία" },
  unique_beaches: { en: "Unique Beaches", el: "Μοναδικές Παραλίες" },
  geology_lovers: { en: "Geology", el: "Γεωλογία" },
  boat_trips: { en: "Boat Trips", el: "Εκδρομές με Σκάφος" },
  city_breaks: { en: "City Breaks", el: "City Breaks" },
  acropolis: { en: "Acropolis", el: "Ακρόπολη" },
  culture: { en: "Culture", el: "Πολιτισμός" },
  authentic_greece: { en: "Authentic Greece", el: "Αυθεντική Ελλάδα" },
  food_culture: { en: "Food Culture", el: "Γαστρονομία" },
  ouzo: { en: "Ouzo & Meze", el: "Ούζο & Μεζές" },
  geopark: { en: "UNESCO Geopark", el: "Γεωπάρκο UNESCO" },
  off_beaten_path: { en: "Off the Beaten Path", el: "Εναλλακτικοί Προορισμοί" },
  birdwatching: { en: "Birdwatching", el: "Παρατήρηση Πουλιών" },
  weekend_escapes: { en: "Weekend Escapes", el: "Αποδράσεις Σαββατοκύριακου" },
  castles: { en: "Castles", el: "Κάστρα" },
  old_town: { en: "Old Town", el: "Παλιά Πόλη" },
  peloponnese_base: { en: "Peloponnese Base", el: "Βάση για Πελοπόννησο" },
  medieval_atmosphere: { en: "Medieval Atmosphere", el: "Μεσαιωνική Ατμόσφαιρα" },
  unique_stays: { en: "Unique Stays", el: "Μοναδική Διαμονή" },
  ancient_ruins: { en: "Ancient Ruins", el: "Αρχαία Ερείπια" },
  peloponnese_road_trip: { en: "Peloponnese Road Trip", el: "Road Trip στην Πελοπόννησο" },
  food_scene: { en: "Food Scene", el: "Φαγητό & Μεζέδες" },
  locals_vibe: { en: "Local's Vibe", el: "Ατμόσφαιρα Ντόπιων" },
  water_sports: { en: "Water Sports", el: "Θαλάσσια Σπορ" },
  weekend_from_thessaloniki: { en: "Thessaloniki Weekend", el: "Σαββατοκύριακο από Θεσσαλονίκη" },
  monasteries: { en: "Monasteries", el: "Μοναστήρια" },
  unique_landscapes: { en: "Unique Landscapes", el: "Μοναδικά Τοπία" },
  UNESCO: { en: "UNESCO World Heritage", el: "Μνημείο UNESCO" },
  spiritual: { en: "Spiritual", el: "Πνευματικότητα" },
  spiritual_travel: { en: "Spiritual Travel", el: "Πνευματικός Τουρισμός" },
  quiet_beaches: { en: "Quiet Beaches", el: "Ήσυχες Παραλίες" },
  carnival: { en: "Carnival", el: "Καρναβάλι" },
  city_break: { en: "City Break", el: "City Break" },
  ferry_hub: { en: "Ferry Hub", el: "Κόμβος Ferry" },
  students: { en: "Student Life", el: "Φοιτητική Ζωή" },
  local_culture: { en: "Local Culture", el: "Τοπικός Πολιτισμός" },
  flat_landscapes: { en: "Flat Landscapes", el: "Επίπεδα Τοπία" },
  local_food: { en: "Local Food", el: "Τοπικό Φαγητό" },
  stone_villages: { en: "Stone Villages", el: "Πέτρινα Χωριά" },
  winter_travel: { en: "Winter Travel", el: "Χειμερινός Τουρισμός" },
  archaeology: { en: "Archaeology", el: "Αρχαιολογία" },
  day_trip_from_athens: { en: "Day Trip from Athens", el: "Μονοήμερη από Αθήνα" },
  mythology: { en: "Mythology", el: "Μυθολογία" },
  mountain_scenery: { en: "Mountain Scenery", el: "Ορεινό Τοπίο" },
  olives_and_food: { en: "Olives & Gastronomy", el: "Ελιές & Τοπικό Φαγητό" },
  city_and_sea: { en: "City & Sea", el: "Πόλη & Θάλασσα" }
};

const NOT_IDEAL_FOR_LABELS: Record<string, { en: string; el: string }> = {
  budget_travel: { en: "Budget travel", el: "Ταξίδια με χαμηλό Budget" },
  families_with_kids: { en: "Families with kids", el: "Οικογένειες με παιδιά" },
  party: { en: "Party seekers", el: "Όσους ψάχνουν πάρτι" },
  quiet_holidays: { en: "Quiet holidays", el: "Ήσυχες διακοπές" },
  short_trips: { en: "Short trips", el: "Σύντομα ταξίδια" },
  island_hopping_only: { en: "Only Island Hopping", el: "Μόνο Island Hopping" },
  quiet_off_beaten_path: { en: "Off beaten path seekers", el: "Εναλλακτικούς ταξιδιώτες" },
  ultra_luxury: { en: "Ultra luxury", el: "Ultra πολυτέλεια" },
  families_with_toddlers: { en: "Families with toddlers", el: "Οικογένειες με μωρά" },
  beach_holiday: { en: "Beach Holidays", el: "Διακοπές για παραλία" },
  relaxation_only: { en: "Relaxation only", el: "Μόνο χαλάρωση" },
  luxury_seekers: { en: "Luxury seekers", el: "Όσους ψάχνουν πολυτέλεια" },
  beach_clubs: { en: "Beach clubs seekers", el: "Beach Clubs" },
  beach_holiday_only: { en: "Only beach holidays", el: "Μόνο διακοπές παραλίας" },
  nightlife: { en: "Nightlife seekers", el: "Νυχτερινή ζωή" },
  island_feel: { en: "Island feel", el: "Νησιώτικη αίσθηση" },
  pure_relaxation: { en: "Pure relaxation", el: "Απόλυτη χαλάρωση" },
  families_with_teenagers: { en: "Families with teenagers", el: "Οικογένειες με εφήβους" },
  luxury_resorts: { en: "Luxury resorts", el: "Luxury Resorts" },
  hill_scenery: { en: "Hill scenery seekers", el: "Όσους ψάχνουν ορεινά τοπία" },
  nightlife_seekers: { en: "Nightlife seekers", el: "Νυχτερινή ζωή" },
  long_stays: { en: "Long stays", el: "Μεγάλη διάρκεια διαμονής" }
};

const CUSTOM_HOTEL_PRICES: Record<string, Record<string, Record<string, number>>> = {
  santorini: {
    low: { budget: 52, mid: 120, luxury: 1264 },
    may_june: { budget: 50, mid: 220, luxury: 1352 },
    july_aug: { budget: 80, mid: 300, luxury: 1560 },
    sept_oct: { budget: 80, mid: 175, luxury: 1385 },
  },
  patras: {
    low: { budget: 40, mid: 60, luxury: 180 },
    may_june: { budget: 50, mid: 90, luxury: 170 },
    july_aug: { budget: 57, mid: 95, luxury: 209 },
    sept_oct: { budget: 42, mid: 70, luxury: 154 },
  },
};

const getRealData = (slug: string) => {
  let key = slug;
  if (key === 'lemnos') key = 'limnos';
  if (key === 'naxos') key = 'paros';
  if (key === 'parga') key = 'paros';
  return REAL_PRICING[key] || REAL_PRICING['paros'];
};

export default function DecisionEngineClient({ destinations, lang }: { destinations: any[]; lang: "en" | "el" }) {
  const [mounted, setMounted] = useState(false);
  const [s1, setS1] = useState(destinations.find((d: any) => d.slug === 'santorini') || destinations[0]);
  const [s2, setS2] = useState(destinations.find((d: any) => d.slug === 'athens') || destinations[1]);
  const [adults, setAdults] = useState(2);
  const [days, setDays] = useState(5);
  const [style, setStyle] = useState<'budget' | 'mid' | 'luxury'>('mid');
  const [month, setMonth] = useState(Object.keys(MONTH_LABELS)[new Date().getMonth()]);
  const [currency, setCurrency] = useState<'EUR' | 'USD' | 'GBP' | 'CNY'>('EUR');

  useEffect(() => { setMounted(true); }, []);

  const calc = (d: any) => {
    const real = getRealData(d.slug);

    // Dynamic Season selection from Month (lowercase standard months)
    let season: 'low' | 'may_june' | 'july_aug' | 'sept_oct' = 'low';
    if (month === 'may' || month === 'june') {
      season = 'may_june';
    } else if (month === 'july' || month === 'august' || month === 'aug') {
      season = 'july_aug';
    } else if (month === 'september' || month === 'october' || month === 'sept' || month === 'oct') {
      season = 'sept_oct';
    } else {
      season = 'low';
    }

    // 1. Accommodation (Hotel Rooms based on 2 people per room)
    const rooms = Math.ceil(adults / 2);
    let hotelCost: number;
    const custom = CUSTOM_HOTEL_PRICES[d.slug]?.[season];
    if (custom) {
      if (d.slug === 'patras' && (month === 'february' || month === 'march')) {
        hotelCost = ({ budget: 60, mid: 100, luxury: 220 })[style] * rooms * days;
      } else {
        hotelCost = custom[style] * rooms * days;
      }
    } else {
      let baseHotelPrice = real[`avg_hotel_${season}`] || 80;
      let styleMultiplier = 1.0;
      if (style === 'budget') styleMultiplier = 0.5;
      if (style === 'luxury') styleMultiplier = 3.2;

      hotelCost = baseHotelPrice * styleMultiplier * rooms * days;
    }

    // 2. Food & Drink
    let mealCost = real.midrange_meal || 30;
    let drinkCost = real.beer_bar || 5;
    let coffeeCost = real.coffee || 3.5;
    let waterCost = real.water_bottle || 1;
    let dailyFoodCost = 0;

    if (style === 'budget') {
      mealCost = real.budget_meal || 15;
      dailyFoodCost = (mealCost * 1.5) + coffeeCost + (waterCost * 2);
    } else if (style === 'mid') {
      mealCost = real.midrange_meal || 30;
      drinkCost = real.beer_bar || 5;
      dailyFoodCost = mealCost + (real.budget_meal || 15) + coffeeCost + drinkCost + (waterCost * 2);
    } else { // luxury
      mealCost = real.luxury_meal || 70;
      drinkCost = real.cocktail || 12;
      dailyFoodCost = mealCost + (real.midrange_meal || 30) + coffeeCost + (drinkCost * 2) + (waterCost * 3);
    }

    const foodCost = dailyFoodCost * adults * days;

    // 3. Transport
    let transportCost = 0;
    if (style === 'budget') {
      const dailyTrans = (real.bus_ticket || 1.5) * 2;
      transportCost = dailyTrans * adults * days;
    } else if (style === 'mid') {
      const dailyTrans = (real.bus_ticket || 1.5) * 2 + (real.taxi_5km || 10) * 0.5;
      transportCost = dailyTrans * adults * days;
    } else { // luxury
      const carRent = real.car_rental_day || 40;
      const dailyTrans = (real.taxi_5km || 12) * 1.5 + carRent / Math.max(adults, 2);
      transportCost = dailyTrans * adults * days;
    }

    // Overall Score (calculated dynamically from real detailed scores)
    const b = real.beach_score ?? 7;
    const n = real.nightlife_score ?? 5;
    const f = real.family_score ?? 7;
    const v = real.value_score ?? 7;
    const fd = real.food_score ?? 7;
    const nt = real.nature_score ?? 7;
    const h = real.history_score ?? 7;
    const score = (b + n + f + v + fd + nt + h) / 7;

    const total = (hotelCost + foodCost + transportCost) * CURRENCIES[currency];

    return {
      total,
      hotel: hotelCost * CURRENCIES[currency],
      food: foodCost * CURRENCIES[currency],
      trans: transportCost * CURRENCIES[currency],
      score: score.toFixed(1)
    };
  };

  const c1 = calc(s1);
  const c2 = calc(s2);
  const diff = c1.total - c2.total;
  const sym = currency === 'EUR' ? '€' : currency === 'USD' ? '$' : currency === 'GBP' ? '£' : '¥';

  // Pre-select logic via URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramS1 = params.get('s1');
    const paramS2 = params.get('s2');
    
    if (paramS1) {
      const found = destinations.find((d: any) => d.slug === paramS1);
      if (found) setS1(found);
    }
    if (paramS2) {
      const found = destinations.find((d: any) => d.slug === paramS2);
      if (found) setS2(found);
    }
  }, [destinations]);

  // UI Translation Dictionaries
  const t: Record<string, Record<string, string>> = {
    title: { en: "Trip Parameters", el: "Παράμετροι Ταξιδιού" },
    dest1: { en: "Destination 1", el: "Προορισμός 1" },
    dest2: { en: "Destination 2", el: "Προορισμός 2" },
    adults: { en: "Adults", el: "Ενήλικες" },
    nights: { en: "Nights", el: "Νύχτες" },
    month: { en: "Month", el: "Μήνας" },
    budgetStyle: { en: "Budget Style", el: "Στυλ Ταξιδιού" },
    budget: { en: "Budget (Low Cost)", el: "Οικονομικό (Budget)" },
    mid: { en: "Mid-range", el: "Μεσαίο (Mid-range)" },
    luxury: { en: "Luxury", el: "Πολυτελές (Luxury)" },
    currency: { en: "Currency", el: "Νόμισμα" },
    matrixTitle: { en: "Comparison Matrix", el: "Πίνακας Σύγκρισης" },
    feature: { en: "Feature", el: "Χαρακτηριστικό" },
    avgTemp: { en: "Avg Temp", el: "Μέση Θερμοκρασία" },
    accommodation: { en: "Accommodation", el: "Διαμονή" },
    foodLabel: { en: "Food & Drink", el: "Φαγητό & Ποτό" },
    transport: { en: "Transport", el: "Μεταφορές" },
    foodOnly: { en: "Food", el: "Φαγητό" },
    recommendation: { en: "Recommendation", el: "Πρόταση" },
    similarlyPriced: { en: "Both options are similarly priced.", el: "Και οι δύο επιλογές έχουν παρόμοιο κόστος." },
    budgetFriendly: { en: "gives a more budget-friendly trip.", el: "προσφέρει ένα πιο οικονομικό ταξίδι." },
    diff: { en: "Diff:", el: "Διαφορά:" },
    highlights: { en: "Highlights of", el: "Κορυφαία Σημεία για" },
    pros: { en: "✓ Pros", el: "✓ Υπέρ" },
    cons: { en: "✕ Cons", el: "✕ Κατά" },
    insiderTips: { en: "💡 Insider Tips", el: "💡 Insider Tips" },
    bestFor: { en: "Best for:", el: "Ιδανικό για:" },
    notIdealFor: { en: "Not ideal for:", el: "Όχι ιδανικό για:" },
    tooltipPrice: { en: "Indicative average. Real prices may be higher or lower depending on season, availability and provider.", el: "Ενδεικτικός μέσος όρος. Οι πραγματικές τιμές μπορεί να διαφέρουν ανάλογα με τη σεζόν, τη διαθεσιμότητα και τον πάροχο." },
    noteEstimate: { en: "💡 Indicative estimate — verify before booking", el: "💡 Ενδεικτική εκτίμηση — επαλήθευσε πριν κλείσεις" }
  };

  const featureKeys = [
    { key: 'beach_score', label: { en: 'Beaches', el: 'Παραλίες' } },
    { key: 'nightlife_score', label: { en: 'Nightlife', el: 'Νυχτερινή Ζωή' } },
    { key: 'family_score', label: { en: 'Family Friendly', el: 'Οικογένεια' } },
    { key: 'value_score', label: { en: 'Value for Money', el: 'Value for Money' } },
    { key: 'food_score', label: { en: 'Gastronomy & Local Food', el: 'Φαγητό' } },
    { key: 'nature_score', label: { en: 'Nature & Landscapes', el: 'Φύση' } },
    { key: 'history_score', label: { en: 'History & Culture', el: 'Ιστορία' } },
  ];

  if (!mounted) return <div className="max-w-6xl mx-auto p-6 h-[800px]" />;

  return (
    <div className="max-w-6xl mx-auto p-3 sm:p-6 space-y-8 sm:space-y-12 bg-transparent">
      {/* 1. Trip Parameters Panel */}
      <div className="bg-white p-4 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-800">{t.title[lang]}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">{t.dest1[lang]}</label>
                <select onChange={e => setS1(destinations.find((d: any) => d.slug === e.target.value))} value={s1.slug} className="w-full p-3 border rounded-xl bg-slate-50">{destinations.map((d: any) => <option key={d.id} value={d.slug}>{d.name}</option>)}</select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">{t.dest2[lang]}</label>
                <select onChange={e => setS2(destinations.find((d: any) => d.slug === e.target.value))} value={s2.slug} className="w-full p-3 border rounded-xl bg-slate-50">{destinations.map((d: any) => <option key={d.id} value={d.slug}>{d.name}</option>)}</select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">{t.adults[lang]}</label>
                <select value={adults} onChange={e => setAdults(Number(e.target.value))} className="w-full p-3 border rounded-xl bg-slate-50">{[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}</select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">{t.nights[lang]}</label>
                <input type="number" min="1" value={days} onChange={e => setDays(Number(e.target.value))} className="w-full p-3 border rounded-xl bg-slate-50" />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">{t.month[lang]}</label>
                <select value={month} onChange={e => setMonth(e.target.value)} className="w-full p-3 border rounded-xl capitalize bg-slate-50">
                  {Object.keys(s1.seasonality || s2.seasonality || MONTH_LABELS).map(m => (
                    <option key={m} value={m}>{MONTH_LABELS[m]?.[lang as 'en' | 'el'] || m}</option>
                  ))}
                </select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">{t.budgetStyle[lang]}</label>
                <select value={style} onChange={e => setStyle(e.target.value as any)} className="w-full p-3 border rounded-xl bg-slate-50">
                    <option value="budget">{t.budget[lang]}</option>
                    <option value="mid">{t.mid[lang]}</option>
                    <option value="luxury">{t.luxury[lang]}</option>
                </select>
            </div>
            <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">{t.currency[lang]}</label>
                <select value={currency} onChange={e => setCurrency(e.target.value as any)} className="w-full p-3 border rounded-xl bg-slate-50">{Object.keys(CURRENCIES).map(c => <option key={c} value={c}>{c}</option>)}</select>
            </div>
        </div>
      </div>

      {/* 2. Budget & Visual Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {[s1, s2].map((d, i) => {
          const cost = i === 0 ? c1 : c2;
          const totalCost = cost.hotel + cost.food + cost.trans;
          return (
            <div key={d.id} className="border p-4 sm:p-8 rounded-3xl bg-white shadow-sm flex flex-col justify-between">
                <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold mb-2">{d.name}</h3>
                    <div className="text-4xl font-extrabold text-indigo-700 mb-2">{sym}{Math.round(cost.total).toLocaleString()}</div>
                    <div className="text-sm font-semibold text-slate-500 mb-6">Overall Score: {cost.score}/10</div>
                </div>

                <div className="space-y-3 border-t pt-6">
                    <div className="flex justify-between items-center text-sm gap-2">
                      <span className="text-slate-600">{t.accommodation[lang]}</span> 
                      <span className="font-bold whitespace-nowrap" title={t.tooltipPrice[lang]}>{sym}{Math.round(cost.hotel).toLocaleString()} <span className="text-slate-400 cursor-help text-xs">ⓘ</span></span>
                    </div>
                    <div className="flex justify-between items-center text-sm gap-2">
                      <span className="text-slate-600">{t.foodLabel[lang]}</span> 
                      <span className="font-bold whitespace-nowrap" title={t.tooltipPrice[lang]}>{sym}{Math.round(cost.food).toLocaleString()} <span className="text-slate-400 cursor-help text-xs">ⓘ</span></span>
                    </div>
                    <div className="flex justify-between items-center text-sm gap-2">
                      <span className="text-slate-600">{t.transport[lang]}</span> 
                      <span className="font-bold whitespace-nowrap" title={t.tooltipPrice[lang]}>{sym}{Math.round(cost.trans).toLocaleString()} <span className="text-slate-400 cursor-help text-xs">ⓘ</span></span>
                    </div>
                    
                    {/* Visual Segmented Progress Bar */}
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden flex mt-3 shadow-inner">
                      <div style={{ width: `${(cost.hotel / totalCost) * 100}%` }} className="bg-indigo-500 transition-all duration-500"></div>
                      <div style={{ width: `${(cost.food / totalCost) * 100}%` }} className="bg-teal-500 transition-all duration-500"></div>
                      <div style={{ width: `${(cost.trans / totalCost) * 100}%` }} className="bg-amber-500 transition-all duration-500"></div>
                    </div>
                    
                    {/* Color Legend */}
                    <div className="flex flex-wrap gap-2 sm:gap-4 text-xs text-slate-500 pt-2 justify-center border-t border-slate-50 mt-4">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span> {t.accommodation[lang]}
                      </div>
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span> {t.foodOnly[lang]}
                      </div>
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> {t.transport[lang]}
                      </div>
                    </div>

                    {/* Small estimate note */}
                    <div className="text-xs text-center text-slate-400 italic pt-1">{t.noteEstimate[lang]}</div>
                </div>
            </div>
          );
        })}
      </div>

      {/* Inline Disclaimer — below budget compare */}
      <div className="text-xs text-amber-700 font-medium p-4 bg-amber-50 border border-amber-200 rounded-xl leading-relaxed text-center">
        {lang === 'el'
          ? "Τα κόστη που εμφανίζονται είναι ενδεικτικές εκτιμήσεις μόνο. Οι τιμές είναι κατά προσέγγιση μέσοι όροι βασισμένοι σε δημόσια διαθέσιμα δεδομένα. Τα πραγματικά κόστη μπορεί να διαφέρουν σημαντικά ανάλογα με τις ημερομηνίες ταξιδιού, τις προσωπικές επιλογές, τη διαθεσιμότητα και τις συνθήκες της αγοράς. Το GoGreeceNow δεν εγγυάται την ακρίβεια οποιασδήποτε εμφανιζόμενης τιμής. Πάντα να επαληθεύετε τις τρέχουσες τιμές απευθείας με ξενοδοχεία, αεροπορικές εταιρείες, εστιατόρια και παρόχους υπηρεσιών πριν από την κράτηση."
          : "These are estimated indicative costs only. Prices shown are approximate averages based on publicly available data and editorial research. Actual costs may vary significantly depending on travel dates, personal choices, booking platform, availability and market conditions. GoGreeceNow does not guarantee the accuracy of any price shown. Always verify current prices directly with hotels, airlines, restaurants and service providers before booking."}
      </div>

      {/* 3. Comparison Matrix */}
      <div className="bg-white p-4 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">{t.matrixTitle[lang]}</h2>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-left text-sm">
            <thead>
                <tr className="border-b">
                  <th className="p-2 sm:p-4 text-left">{t.feature[lang]}</th>
                  <th className="p-2 sm:p-4 text-center">{s1.name}</th>
                  <th className="p-2 sm:p-4 text-center">{s2.name}</th>
                </tr>
            </thead>
            <tbody>
                {/* Dynamically mapped average temperature */}
                <tr className="border-b font-semibold text-indigo-900 bg-indigo-50/30">
                    <td className="p-2 sm:p-4">{t.avgTemp[lang]} ({MONTH_LABELS[month]?.[lang as 'en' | 'el'] || month})</td>
                    <td className="p-2 sm:p-4 text-center">{s1.seasonality?.[month]?.temp ?? getRealData(s1.slug).temp ?? 'N/A'}°C</td>
                    <td className="p-2 sm:p-4 text-center">{s2.seasonality?.[month]?.temp ?? getRealData(s2.slug).temp ?? 'N/A'}°C</td>
                </tr>
                {featureKeys.map(item => {
                  const val1 = getRealData(s1.slug)[item.key] ?? 7;
                  const val2 = getRealData(s2.slug)[item.key] ?? 7;
                  return (
                    <tr key={item.key} className="border-b">
                        <td className="p-2 sm:p-4 font-semibold">{lang === 'el' ? item.label.el : item.label.en}</td>
                        <td className="p-2 sm:p-4 text-center font-bold text-slate-800">{val1}/10</td>
                        <td className="p-2 sm:p-4 text-center font-bold text-slate-800">{val2}/10</td>
                    </tr>
                  );
                })}
            </tbody>
            </table>
        </div>
      </div>
      
      {/* 4. Recommendation */}
      <div className="bg-indigo-900 text-white p-4 sm:p-8 rounded-3xl mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">{t.recommendation[lang]}</h3>
            <p className="text-base sm:text-lg opacity-90 mt-2">
                {Math.abs(diff) < 50 ? t.similarlyPriced[lang] : 
                `${diff > 0 ? s2.name : s1.name} ${t.budgetFriendly[lang]}`}
            </p>
        </div>
        <div className="text-center bg-white/10 px-6 py-3 rounded-full font-bold whitespace-nowrap">
            {t.diff[lang]} {sym}{Math.abs(Math.round(diff)).toLocaleString()}
        </div>
      </div>

      {/* 5. Pros/Cons, Best For, and Insider Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-8">
        {[s1, s2].map(d => {
          const real = getRealData(d.slug);
          return (
            <div key={d.id} className="border p-4 sm:p-8 rounded-3xl bg-white shadow-sm flex flex-col justify-between space-y-6">
                <div>
                    <h4 className="font-bold text-lg sm:text-xl mb-4 text-indigo-900">{t.highlights[lang]} {d.name}</h4>
                    <div className="space-y-4">
                        <div>
                          <h5 className="font-bold text-green-700 mb-1.5">{t.pros[lang]}</h5>
                          <ul className="text-slate-700 text-sm space-y-1">
                            {d.content?.pros?.map((p:string) => <li key={p}>✓ {p}</li>) ?? <li>N/A</li>}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-red-700 mb-1.5">{t.cons[lang]}</h5>
                          <ul className="text-slate-500 text-sm space-y-1">
                            {d.content?.cons?.map((c:string) => <li key={c}>✕ {c}</li>) ?? <li>N/A</li>}
                          </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-4 space-y-4">
                    {/* Tags Best For / Not Ideal For from real dataset */}
                    {real.best_for && (
                      <div>
                        <h5 className="text-xs font-bold text-indigo-800 uppercase tracking-widest mb-1.5">{t.bestFor[lang]}</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {(real.best_for as string[]).map((tag) => (
                            <span key={tag} className="bg-emerald-50 text-emerald-800 border border-emerald-100 px-2 py-0.5 rounded-lg text-xs font-semibold">
                              ★ {BEST_FOR_LABELS[tag]?.[lang] || tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {real.not_ideal_for && (
                      <div>
                        <h5 className="text-xs font-bold text-rose-800 uppercase tracking-widest mb-1.5">{t.notIdealFor[lang]}</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {(real.not_ideal_for as string[]).map((tag) => (
                            <span key={tag} className="bg-rose-50 text-rose-800 border border-rose-100 px-2 py-0.5 rounded-lg text-xs font-semibold">
                              ⚠ {NOT_IDEAL_FOR_LABELS[tag]?.[lang] || tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="border-t border-slate-100 pt-4">
                      <h5 className="font-bold text-indigo-800 mb-2">{t.insiderTips[lang]}</h5>
                      <ul className="text-slate-600 text-sm space-y-1 italic">
                        {d.content?.insider_tips?.map((tip:string) => <li key={tip}>"{tip}"</li>) ?? <li>No tips yet</li>}
                      </ul>
                    </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
