package com.digital.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.digital.entity.Attendance;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
	
	
	
	@Query("SELECT new map(a.employeeId as employeeId, e.employeeName as employeeName, a.status as status, a.timestamp as timestamp) " +
	           "FROM Attendance a JOIN Employee e ON a.employeeId = e.id")
	    List<Map<String, Object>> findAllAttendanceWithEmployeeName();
	
	
}
