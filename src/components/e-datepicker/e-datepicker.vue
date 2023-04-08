<template>
  <div class="datepicker" :v-click-outside="() => (showPicker = false)">
    <input
      readonly
      type="text"
      v-model="selectedDate"
      @click="showPicker = true"
      v-bind="$attrs"
    />
    <div v-if="showPicker" class="picker">
      <div class="header">
        <span class="prev" @click="previousMonth">&lt;</span>
        <span class="current">{{ currentMonth }}</span>
        <span class="next" @click="nextMonth">&gt;</span>
      </div>
      <table>
        <thead>
          <tr>
            <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, index) in weeks" :key="index">
            <td
              v-for="(day, index) in week"
              :key="index"
              :class="{ today: isToday(day), selected: isSelected(day) }"
              @click="selectDate(day)"
            >
              {{ day?.day }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedDate: "",
      showPicker: false,
      date: new Date(),
      daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      currentMonth: "",
      weeks: [],
    };
  },
  mounted() {
    this.currentMonth = new Date().toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    this.getWeeks();
  },
  methods: {
    previousMonth() {
      this.date.setMonth(this.date.getMonth() - 1);
      this.setCurrentMonth();
      this.getWeeks();
    },
    nextMonth() {
      this.date.setMonth(this.date.getMonth() + 1);
      this.setCurrentMonth();
      this.getWeeks();
    },
    isToday(day) {
      const today = new Date();
      return (
        day?.date.getDate() === today.getDate() &&
        day?.date.getMonth() === today.getMonth() &&
        day?.date.getFullYear() === today.getFullYear()
      );
    },
    isSelected(day) {
      return this.selectedDate === day?.date.toISOString().substring(0, 10);
    },
    selectDate(day) {
      this.selectedDate = day?.date.toISOString().substring(0, 10);
      this.showPicker = false;
    },
    setCurrentMonth() {
      this.currentMonth = this.date.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
    },
    getWeeks() {
      const weeks = [];
      const firstDayOfMonth = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        0
      );
      const lastDayOfMonth = new Date(
        this.date.getFullYear(),
        this.date.getMonth() + 1,
        0
      );
      let week = [];
      let dayOfWeek = firstDayOfMonth.getDay();
      for (let i = 0; i < dayOfWeek; i++) {
        week.push(null);
      }
      for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        week.push({
          date: new Date(this.date.getFullYear(), this.date.getMonth(), i),
          day: i,
        });
        if (dayOfWeek === 6) {
          weeks.push(week);
          week = [];
          dayOfWeek = 0;
        } else {
          dayOfWeek++;
        }
      }
      if (week.length > 0) {
        for (let i = week.length; i < 7; i++) {
          week.push(null);
        }
        weeks.push(week);
      }
      this.weeks = weeks;
    },
  },
};
</script>
<style lang="scss" scoped>
.datepicker {
  position: relative;

  input {
    outline: none;
    padding: 10px 15px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: rgb(var(--font-color));
    position: relative;
    caret-color: rgb(var(--primary));
    border: 1px solid rgba(47, 56, 94, 0.2);
    border-radius: 6px;
    margin-bottom: 25px;
    overflow: hidden;
    background: rgb(var(--backgraund));
    display: flex;
    align-items: center;
    transition: all 0.3s;
    margin-top: 9px;

    &::placeholder {
      color: rgba(var(--font-color), 0.6);
    }
  }
}
.picker {
  position: absolute;
  top: 45px;
  left: 0;
  background-color: rgb(var(--backgraund));
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.2);
  padding: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.prev,
.next {
  cursor: pointer;
}

.current {
  font-weight: bold;
}

table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  text-align: center;
  padding: 5px;
}

td:hover {
  cursor: pointer;
  background-color: rgb(var(--primary));
}

.today {
  background-color: rgba(var(--primary), 0.2);
}

.selected {
  background-color: rgb(var(--primary));
  color: rgb(var(--font-color));
}
</style>
